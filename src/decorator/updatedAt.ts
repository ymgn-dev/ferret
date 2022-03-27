/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { updatedAtMetadataKey } from '../constant/metadata';
import { UpdatedAtSerializable } from '../serialize/serializable/updatedAtSerializable';

export function UpdatedAt(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata(updatedAtMetadataKey, new UpdatedAtSerializable(), target, propertyKey);
}
