import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
