import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
    constructor(
        private readonly jobsService:JobsService
    ){}
    
    @Get()
    async getJobs():Promise<Job[]>{
        return await this.jobsService.getJobs();
    }
}
