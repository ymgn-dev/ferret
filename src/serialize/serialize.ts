/* eslint-disable @typescript-eslint/no-explicit-any */

import { instanceToPlain } from 'class-transformer';
import { applyFuncAnyType } from '../util/applyFuncAnyType';
import { getLastMetadatum } from '../util/getLastMetadatum';
import { isUserDefined } from '../util/isUserDefined';
import { JsonSerializable } from './serializable/jsonSerializable';

export function serialize(instance: any) {
  const json = instanceToPlain(instance);

  for (const key in json) {
    if (isUserDefined({ target: instance, propertyName: key })) {
      json[key] = applyFuncAnyType(instance[key], serialize);
      continue;
    }
    const decorator = getLastMetadatum({ target: instance, propertyName: key });
    if (decorator === undefined) {
      continue;
    }
    json[key] = applyFuncAnyType(instance[key], (decorator as JsonSerializable).toJson);
  }

  return json;
}
