/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeoPoint } from 'firebase/firestore';
import { JsonSerializable } from './jsonSerializable';

export class GeoSerializable extends JsonSerializable {
  override toJson(property?: any): { latitude: number; longitude: number } | undefined {
    if (property instanceof GeoPoint) {
      return property.toJSON();
    }
    return undefined;
  }

  override fromJson(property?: any): GeoPoint | undefined {
    if (property instanceof GeoPoint) {
      return property;
    }
    if (property._lat !== undefined && property._long !== undefined) {
      return new GeoPoint(property._lat, property._long);
    }
    if (property.latitude !== undefined && property.longitude !== undefined) {
      return new GeoPoint(property.latitude, property.longitude);
    }
    return undefined;
  }
}
