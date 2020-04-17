import { Test, TestingModule } from '@nestjs/testing';
import { EducationsController } from './educations.controller';

describe('Educations Controller', () => {
  let controller: EducationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationsController],
    }).compile();

    controller = module.get<EducationsController>(EducationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
