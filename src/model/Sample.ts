import 'reflect-metadata';
import { CreatedAtConverter } from '../decorators/CreatedAtConverters';
import { UpdatedAtConverter } from '../decorators/UpdatedAtConverters';

export class Sample {
  id?: string;

  name?: string;

  @CreatedAtConverter
  createdAt?: Date;

  @UpdatedAtConverter
  updatedAt?: Date;
}
