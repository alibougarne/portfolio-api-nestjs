import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Delete,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';
// import ClientFtp from '../config/ftp/ftp';
import { TagDto } from './dto/tagDto.dto';


@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService,
    ) {}

  // @UseGuards(AuthGuard('jwt'),RolesGuard)
  // @Roles('ADMIN')
  @Get('all')
  async getAllTags(): Promise<TagDto[]> {
    let tags: TagDto[] = await this.tagsService.getAllTags();
    // let tagDtos: TagDto[] = this.tagsService.convertTagsToTagDtoS(tags);
    return tags;
  }

  @Delete(':tagId')
  async deleteTag(@Param('tagId') tagId:string){
    return await this.tagsService.deleteTag(tagId);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('tagImage', {
      storage: diskStorage({
        destination: './client/resources/tags',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async createTag(
    @Body() payload: any,
    @UploadedFile() tagImage: any,
  ): Promise<Tag> {
    const tag: Tag = <Tag>JSON.parse(payload.tag);
    return this.tagsService.saveTag(tag,tagImage);
  }

  @Put()
  @UseInterceptors(
    FileInterceptor('tagImage', {
      storage: diskStorage({
        destination: './client/resources/tags',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async editTag(
    @Body() payload: any,
    @UploadedFile() tagImage: any,
  ): Promise<Tag> {
    const tag: Tag = <Tag>JSON.parse(payload.tag);
    return this.tagsService.saveTag(tag,tagImage);
  }
 
}
