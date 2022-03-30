import { FieldValue, Timestamp } from 'firebase/firestore';
import { describe, expect, it } from 'vitest';
import { UpdatedAt } from '../src/decorator/updatedAt';
import { deserialize } from '../src/serialize/deserialize';
import { serialize } from '../src/serialize/serialize';

class UpdatedAtModel {
  @UpdatedAt
  updatedAt?: Date;
}

describe('UpdatedAt', () => {
  // Type
  it('should be a function', () => {
    expect(typeof UpdatedAt).toBe('function');
  });

  // Serialize
  it('converted to FieldValue when serializing', () => {
    let model = new UpdatedAtModel();
    model.updatedAt = undefined;
    let json = serialize(model);

    expect(json.updatedAt instanceof FieldValue).toBe(true);
  });

  // Deserialize
  it('converted to Date when deserializing', () => {
    let json = { updatedAt: Timestamp.now() };
    let model = deserialize(json, UpdatedAtModel);

    expect(model.updatedAt instanceof Date).toBe(true);
  });
});
