/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { applyFuncAnyType } from '../util/applyFuncAnyType';
import { getLastMetadatum } from '../util/getLastMetadatum';
import { getUserDefinedMetadata } from '../util/getUserDefinedMetadata';
import { isUserDefined } from '../util/isUserDefined';
import { JsonSerializable } from './serializable/jsonSerializable';

export function deserialize<T>(json: any, cls: ClassConstructor<T>) {
  const target = plainToInstance(cls, json);

  for (const propertyKey in target) {
    if (isUserDefined({ target, propertyKey })) {
      target[propertyKey] = applyFuncAnyType(
        json[propertyKey],
        deserialize,
        getUserDefinedMetadata({ target, propertyKey }),
      );
      continue;
    }
    const decorator = getLastMetadatum({ target, propertyKey });
    if (decorator === undefined) {
      continue;
    }
    target[propertyKey] = applyFuncAnyType(
      json[propertyKey],
      (decorator as JsonSerializable).fromJson,
    );
  }

  return target;
}
