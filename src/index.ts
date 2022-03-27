import { NestedSample, Sample } from './model/sample';
import { deserialize } from './serialize/Deserialize';

// let model = new Sample();
// model.id = '1';
// model.name = 'sample_name';
// model.createdAt = undefined;
// model.updatedAt = undefined;

// // instance to JSON
// const json = serialize(model);

// console.log(json);

// // JSON to instance
// const instance = deserialize(
//   { id: '1', name: 'sample_name', createdAt: Timestamp.now(), updatedAt: Timestamp.now() },
//   Sample,
// );

// console.log(instance);

let model = new NestedSample();
model.id = '2';
model.updatedAt = new Date();
model.sample = new Sample();
model.sample.id = '1';
model.sample.name = 'sample_name';
model.sample.createdAt = undefined;
model.sample.updatedAt = undefined;

// const json = serialize(model);
// console.log(json);

const instance = deserialize(
  {
    id: '2',
    updatedAt: new Date(),
    sample: { id: '1', name: 'sample_name', createdAt: new Date(), updatedAt: new Date() },
  },
  NestedSample,
);
console.log(instance);
