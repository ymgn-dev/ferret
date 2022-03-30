import { FieldValue, Timestamp } from 'firebase/firestore';
import { describe, expect, it } from 'vitest';
import { UpdatedAt } from '../src/decorator/updatedAt';
import { UserDefined } from '../src/decorator/userDefined';
import { deserialize } from '../src/serialize/deserialize';
import { serialize } from '../src/serialize/serialize';

class UpdatedAtModel {
  @UpdatedAt
  updatedAt?: Date;
}

class UserDefinedModel {
  @UserDefined(UpdatedAtModel)
  child: UpdatedAtModel;
}

describe('UserDefined', () => {
  // Type
  it('should be a function', () => {
    expect(typeof UserDefined).toBe('function');
  });

  // Serialize
  it('converted to FieldValue when serializing', () => {
    let model = new UserDefinedModel();
    model.child = new UpdatedAtModel();
    model.child.updatedAt = undefined;
    let json = serialize(model);

    expect(json.child.updatedAt instanceof FieldValue).toBe(true);
  });

  // Deserialize
  it('converted to Date when deserializing', () => {
    let json = { child: { updatedAt: Timestamp.now() } };
    let model = deserialize(json, UserDefinedModel);

    expect(model.child.updatedAt instanceof Date).toBe(true);
  });
});
