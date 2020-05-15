import { Controller, Get } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { Education } from './education.entity';

@Controller('educations')
export class EducationsController {
    constructor(
        private readonly educationService:EducationsService
    ){}
    @Get()
    async getEducations():Promise<Education[]>{
        return await this.educationService.getEducations();
    }

}
