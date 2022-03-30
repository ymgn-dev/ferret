import { FieldValue, Timestamp } from 'firebase/firestore';
import { describe, expect, it } from 'vitest';
import { CreatedAt } from '../src/decorator/createdAt';
import { deserialize } from '../src/serialize/deserialize';
import { serialize } from '../src/serialize/serialize';

class CreatedAtModel {
  @CreatedAt
  createdAt?: Date;
}

describe('CreatedAt', () => {
  // Type
  it('should be a function', () => {
    expect(typeof CreatedAt).toBe('function');
  });

  // Serialize
  it('converted to FieldValue when serializing', () => {
    let model = new CreatedAtModel();
    model.createdAt = undefined;
    let json = serialize(model);

    expect(json.createdAt instanceof FieldValue).toBe(true);
  });

  // Deserialize
  it('converted to Date when deserializing', () => {
    let json = { createdAt: Timestamp.now() };
    let model = deserialize(json, CreatedAtModel);

    expect(model.createdAt instanceof Date).toBe(true);
  });
});
