/* eslint-disable @typescript-eslint/no-explicit-any */

import { plainToInstance, type ClassConstructor } from 'class-transformer';
import type { JsonSerializable } from './JsonSerializable';
import { getLastDecorator } from './utils/GetDecorators';

export function deserialize<T>(json: any, cls: ClassConstructor<T>) {
  const instance = plainToInstance(cls, json);

  for (const property in instance) {
    const decorator = getLastDecorator({ target: instance, propertyName: property });
    if (decorator === undefined) {
      continue;
    }
    instance[property] = (decorator as JsonSerializable).fromJson(instance[property]);
  }

  return instance;
}
