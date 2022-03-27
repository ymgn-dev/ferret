/* eslint-disable @typescript-eslint/no-explicit-any */
import { instanceToPlain } from 'class-transformer';
import type { JsonSerializable } from './JsonSerializable';
import { getLastDecorator } from './utils/GetDecorators';

export function serialize(instance: any) {
  const json = instanceToPlain(instance);

  for (const key in json) {
    const decorator = getLastDecorator({ target: instance, propertyName: key });
    if (decorator === undefined) {
      continue;
    }
    json[key] = (decorator as JsonSerializable).toJson(instance[key]);
  }

  return json;
}
