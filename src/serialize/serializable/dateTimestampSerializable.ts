/* eslint-disable @typescript-eslint/no-explicit-any */
import { Timestamp } from 'firebase/firestore';
import { JsonSerializable } from './jsonSerializable';

export class DateTimestampSerializable extends JsonSerializable {
  override toJson(property?: any): Timestamp | undefined {
    if (property === undefined) {
      return undefined;
    }
    if (property instanceof Timestamp) {
      return property;
    }
    return Timestamp.fromDate(property);
  }

  override fromJson(property?: any): Date | undefined {
    if (property === undefined) {
      return undefined;
    }
    if (property instanceof Timestamp) {
      return property.toDate();
    }
    return property;
  }
}
