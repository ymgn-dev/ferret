import { Timestamp } from 'firebase/firestore';
import { Sample } from './model/Sample';
import { deserialize } from './serialize/Deserialize';
import { serialize } from './serialize/Serialize';

let model = new Sample();
model.id = '1';
model.name = 'sample_name';
model.createdAt = undefined;
model.updatedAt = undefined;

// instance to JSON
const json = serialize(model);

console.log(json);

// JSON to instance
const instance = deserialize(
  { id: '1', name: 'sample_name', createdAt: Timestamp.now(), updatedAt: Timestamp.now() },
  Sample,
);

console.log(instance);
