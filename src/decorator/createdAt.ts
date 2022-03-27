/* eslint-disable @typescript-eslint/no-explicit-any */

import { createdAtMetadataKey } from '../constant/metadata';
import { CreatedAtSerializable } from '../serialize/serializable/createdAtSerializable';

export function CreatedAt(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata(createdAtMetadataKey, new CreatedAtSerializable(), target, propertyKey);
}
