/* eslint-disable @typescript-eslint/no-explicit-any */
import { instanceToPlain } from 'class-transformer';
import { applyFuncAnyType } from '../util/applyFuncAnyType';
import { getLastMetadatum } from '../util/getLastMetadatum';
import { isUserDefined } from '../util/isUserDefined';
import { JsonSerializable } from './serializable/jsonSerializable';

export function serialize(target: any) {
  const json = instanceToPlain(target);

  for (const propertyKey in json) {
    if (isUserDefined({ target, propertyKey })) {
      json[propertyKey] = applyFuncAnyType(target[propertyKey], serialize);
      continue;
    }
    const decorator = getLastMetadatum({ target, propertyKey });
    if (decorator === undefined) {
      continue;
    }
    json[propertyKey] = applyFuncAnyType(
      target[propertyKey],
      (decorator as JsonSerializable).toJson,
    );
  }

  return json;
}
