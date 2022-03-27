/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { UpdatedAtSerializable } from '../serialize/UpdatedAtSerializable';

export function UpdatedAtConverter(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata('firebase:updated-at', new UpdatedAtSerializable(), target, propertyKey);
}
