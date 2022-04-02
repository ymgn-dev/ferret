/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValue, serverTimestamp, Timestamp } from 'firebase/firestore';
import { JsonSerializable } from './jsonSerializable';

export class UpdatedAtSerializable extends JsonSerializable {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override toJson(_property?: any): FieldValue {
    return serverTimestamp();
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
