/* eslint-disable @typescript-eslint/no-explicit-any */

import { CreatedAtSerializable } from '../serialize/CreatedAtSerializable';

export function CreatedAtConverter(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata('firebase:created-at', new CreatedAtSerializable(), target, propertyKey);
}
