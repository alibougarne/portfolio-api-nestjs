import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { DeleteResult } from 'typeorm';

@Controller('jobs')
export class JobsController {
    constructor(
        private readonly jobsService:JobsService
    ){}
    
    @Get()
    async getJobs():Promise<Job[]>{
        return await this.jobsService.getJobs();
    }

    @Post()
    async createJob(@Body() job:Job):Promise<Job>{
        return await this.jobsService.saveJob(job);
    }

    @Put()
    async updateJob(@Body() job:Job):Promise<Job>{
        return await this.jobsService.saveJob(job);
    }

    @Delete(':jobId')
    async deleteJob(@Param() jobId:string):Promise<DeleteResult>{
        return await this.jobsService.deleteJob(jobId);
    }
}
