import { Test, TestingModule } from '@nestjs/testing';
import { BusinessLinesService } from './business-lines.service';

describe('BusinessLinesService', () => {
  let service: BusinessLinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessLinesService],
    }).compile();

    service = module.get<BusinessLinesService>(BusinessLinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
