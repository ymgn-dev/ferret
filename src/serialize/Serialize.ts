/* eslint-disable @typescript-eslint/no-explicit-any */
import { instanceToPlain } from 'class-transformer';
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

export function serialize(instance: any) {
  const json = instanceToPlain(instance);

  for (const key in json) {
    if (isUserDefined({ target: instance, propertyName: key })) {
      json[key] = serialize(instance[key]);
      continue;
    }
    const decorator = getLastDecorator({ target: instance, propertyName: key });
    if (decorator === undefined) {
      continue;
    }
    json[key] = (decorator as JsonSerializable).toJson(instance[key]);
  }

  return json;
}
