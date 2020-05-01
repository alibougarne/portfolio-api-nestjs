import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './job.entity';
import { Repository } from 'typeorm';
import { CustomException } from 'src/app/exception/custom.exception';

@Injectable()
export class JobsService {

    constructor(
        @InjectRepository(Job)
        private readonly jobRepository:Repository<Job>
    ){}
    async getJobs(): Promise<Job[]> {
        try {
            return await this.jobRepository.find();
        } catch (error) {
            throw new CustomException("No jobs found",HttpStatus.NOT_FOUND)
        }
    }
}
