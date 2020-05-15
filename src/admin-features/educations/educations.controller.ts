import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { EducationsService } from './educations.service';
import { Education } from './education.entity';
import { DeleteResult } from 'typeorm';

@Controller('educations')
export class EducationsController {
    constructor(
        private readonly educationService:EducationsService
    ){}

    @Get()
    async getEducations():Promise<Education[]>{
        return await this.educationService.getEducations();
    }

    @Post()
    async createEducation(@Body() education:Education):Promise<Education>{
        return await this.educationService.saveEducation(education);
    }

    @Put()
    async updateEducation(@Body() job:Education):Promise<Education>{
        return await this.educationService.saveEducation(job);
    }

    @Delete(':educationId')
    async deleteJob(@Param() educationId:string):Promise<DeleteResult>{
        return await this.educationService.deleteEducation(educationId);
    }
}
