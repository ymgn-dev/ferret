import 'reflect-metadata';
import { CreatedAtConverter } from '../decorators/CreatedAtConverters';
import { UpdatedAtConverter } from '../decorators/UpdatedAtConverters';
import { UserDefine } from '../decorators/UserDefine';

export class Sample {
  id?: string;

  name?: string;

  @CreatedAtConverter
  createdAt?: Date;

  @UpdatedAtConverter
  updatedAt?: Date;
}

export class Sample2 {
  id?: string;

  @UserDefine(Sample)
  sample: Sample;

  @UpdatedAtConverter
  updatedAt?: Date;
}
