/* eslint-disable @typescript-eslint/no-explicit-any */

import { ClassConstructor, plainToInstance } from 'class-transformer';
import { getLastDecorator } from '../util/getLastDecorator';
import { getUserDefinedMetadata } from '../util/getUserDefinedMetadata';
import { isUserDefined } from '../util/isUserDefined';
import { JsonSerializable } from './serializable/jsonSerializable';

export function deserialize<T>(json: any, cls: ClassConstructor<T>) {
  const instance = plainToInstance(cls, json);

  for (const property in instance) {
    if (isUserDefined({ target: instance, propertyName: property })) {
      instance[property] = deserialize(
        json[property],
        getUserDefinedMetadata({ target: instance, propertyName: property }),
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
