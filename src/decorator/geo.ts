/* eslint-disable @typescript-eslint/no-explicit-any */
import { geoMetadataKey } from '../constant/metadata';
import { GeoSerializable } from '../serialize/serializable/geoSerializable';

export function Geo(target: any, propertyKey: string | symbol) {
  Reflect.defineMetadata(geoMetadataKey, new GeoSerializable(), target, propertyKey);
}
