import { Child, Parent } from './model/sample';
import { deserialize } from './serialize/Deserialize';
import { serialize } from './serialize/serialize';

let model = new Parent();
model.id = '2';
model.updatedAt = new Date();
model.child = new Child();
model.child.id = '1';
model.child.name = 'sample_name';
model.child.createdAt = undefined;
model.child.updatedAt = undefined;

const json = serialize(model);
console.log('--------- serialize ---------');
console.log(json);

const instance = deserialize(
  {
    id: '2',
    updatedAt: new Date(),
    sample: { id: '1', name: 'sample_name', createdAt: new Date(), updatedAt: new Date() },
  },
  Parent,
);
console.log('--------- deserialize ---------');
console.log(instance);
