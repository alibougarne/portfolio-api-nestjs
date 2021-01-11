import { Test, TestingModule } from '@nestjs/testing';
import { EducationsService } from './educations.service';

describe('EducationService', () => {
  let service: EducationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationsService],
    }).compile();

    service = module.get<EducationService>(EducationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
