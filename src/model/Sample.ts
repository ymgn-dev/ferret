import 'reflect-metadata';
import { CreatedAt } from '../decorator/createdAt';
import { UpdatedAt } from '../decorator/updatedAt';
import { UserDefined } from '../decorator/userDefined';

export class Child {
  id?: string;

  name?: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;
}

export class Parent {
  id?: string;

  @UpdatedAt
  updatedAt?: Date[];

  @UserDefined(Child)
  children: Child[];
}
