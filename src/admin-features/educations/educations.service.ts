import { Injectable, HttpStatus } from '@nestjs/common';
import { Education } from './education.entity';
import { CustomException } from '../../app/exception/custom.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class EducationsService {

    constructor(
        @InjectRepository(Education)
        private readonly educationRepository:Repository<Education>
    ){}

    async getEducations(): Promise<Education[]> {
        try {
            return await this.educationRepository.find();
        } catch (error) {
            throw new CustomException("No Education found",HttpStatus.NOT_FOUND)
        }
    }

    async saveEducation(education: Education): Promise<Education> {
        try {
            return this.educationRepository.save(education);
        } catch (error) {
            throw new CustomException("Error creating Education",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteEducation(educationId: string): Promise<DeleteResult> {
        try {
            return await this.educationRepository.delete(educationId);
        } catch (error) {
            throw new CustomException("Error deleting education",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
