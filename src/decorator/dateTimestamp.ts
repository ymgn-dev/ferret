/* eslint-disable @typescript-eslint/no-explicit-any */
import { dateTimestampMetadataKey } from '../constant/metadata';
import { DateTimestampSerializable } from '../serialize/serializable/dateTimestampSerializable';

export function DateTimestamp(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata(
    dateTimestampMetadataKey,
    new DateTimestampSerializable(),
    target,
    propertyKey,
  );
}
