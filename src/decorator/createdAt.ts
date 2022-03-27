/* eslint-disable @typescript-eslint/no-explicit-any */

import { CreatedAtSerializable } from '../serialize/serializable/createdAtSerializable';

export function CreatedAt(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata('firebase:created-at', new CreatedAtSerializable(), target, propertyKey);
}
