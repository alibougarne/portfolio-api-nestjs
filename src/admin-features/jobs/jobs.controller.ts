import { Controller, Get, Post, Body } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';
import { JobDto } from './dto/job.dto';

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
}
