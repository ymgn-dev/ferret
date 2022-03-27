import 'reflect-metadata';
import { CreatedAt } from '../decorator/createdAt';
import { UpdatedAt } from '../decorator/updatedAt';
import { UserDefined } from '../decorator/userDefined';

export class Sample {
  id?: string;

  name?: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}

export class Sample2 {
  id?: string;

  @UserDefined(Sample)
  sample: Sample;

  @UpdatedAt
  updatedAt?: Date;
}
