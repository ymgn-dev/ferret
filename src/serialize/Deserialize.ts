/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClassConstructor, plainToInstance } from 'class-transformer';
import type { JsonSerializable } from './JsonSerializable';
import { getDecorators, getLastDecorator } from './utils/GetDecorators';

function isUserDefined({
  target,
  propertyName,
  annotation = 'user-define:',
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}) {
  const nestedDecorators = getDecorators({ target, propertyName, annotation });
  return nestedDecorators.length > 0;
}

function userDefinedMetadata({
  target,
  propertyName,
}: {
  target: any;
  propertyName: string | symbol;
}) {
  return Reflect.getMetadata('user-define:property', target, propertyName);
}

export function deserialize<T>(json: any, cls: ClassConstructor<T>) {
  const instance = plainToInstance(cls, json);

  for (const property in instance) {
    if (isUserDefined({ target: instance, propertyName: property })) {
      instance[property] = deserialize(
        json[property],
        userDefinedMetadata({ target: instance, propertyName: property }),
      ) as any;
      continue;
    }
    const decorator = getLastDecorator({ target: instance, propertyName: property });
    if (decorator === undefined) {
      continue;
    }
    instance[property] = (decorator as JsonSerializable).fromJson(instance[property]);
  }

  return instance;
}
