import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Request,
  Delete,
  Param,
  Put,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tagDto.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/shared/roles/roles.decorator';
import { RolesGuard } from 'src/shared/roles/roles.guard';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './utils/file-upload.utils';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  // @UseGuards(AuthGuard('jwt'),RolesGuard)
  // @Roles('ADMIN')
  @Get('all')
  async getAllTags(): Promise<Tag[]> {
    let tags: Tag[] = await this.tagsService.getAllTags();
    // let tagDtos: TagDto[] = this.tagsService.convertTagsToTagDtoS(tags);
    return tags;
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
    tag.logoPath = tagImage.filename;
    return this.tagsService.saveTag(tag);
  }

  @Get('image/:imgPath')
  seeUploadedFile(@Param('imgPath') image:string, @Res() res:any) {
    return res.sendFile(image, { root: './client/resources/tags' });
  }
  
  @Delete(':tagId')
  async deleteTag(@Param('tagId') tagId:string){
    return await this.tagsService.deleteTag(tagId);
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
    tag.logoPath = tagImage.path.replace('client/', '/');
    return this.tagsService.saveTag(tag);
  }
}
