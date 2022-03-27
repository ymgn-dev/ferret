/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValue, serverTimestamp, Timestamp } from 'firebase/firestore';
import { JsonSerializable } from './jsonSerializable';

export class CreatedAtSerializable extends JsonSerializable {
  override toJson(property?: any): FieldValue | Timestamp {
    if (property === undefined) {
      return serverTimestamp();
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
