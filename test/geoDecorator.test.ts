import { GeoPoint } from 'firebase/firestore';
import { describe, expect, it } from 'vitest';
import { Geo } from '../src/decorator/geo';
import { deserialize } from '../src/serialize/deserialize';
import { serialize } from '../src/serialize/serialize';

class GeoModel {
  @Geo
  geoPoint?: GeoPoint;
}

describe('Geo', () => {
  // Type
  it('should be a function', () => {
    expect(typeof Geo).toBe('function');
  });

  // Serialize
  it('converted to GeoPoint when serializing', () => {
    let model = new GeoModel();
    model.geoPoint = new GeoPoint(0, 0);
    let json = serialize(model);

    expect(json.geoPoint instanceof GeoPoint).toBe(true);
  });

  // Deserialize
  it('converted to GeoPoint when deserializing', () => {
    let json = { geoPoint: { latitude: 2, longitude: 3 } };
    let model = deserialize(json, GeoModel);

    expect(model.geoPoint instanceof GeoPoint).toBe(true);
  });
});
