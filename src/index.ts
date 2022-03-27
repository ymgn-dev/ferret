import { Child, Parent } from './model/sample';
import { deserialize } from './serialize/Deserialize';
import { serialize } from './serialize/serialize';

let model = new Parent();
model.id = '2';
model.updatedAt = new Date();

model.child = [new Child(), new Child(), new Child()];

for (let i = 0; i < 3; i++) {
  model.child[i].id = `${i}`;
  model.child[i].name = `sample_name${i}`;
  model.child[i].createdAt = undefined;
  model.child[i].updatedAt = undefined;
}

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
// console.log('--------- deserialize ---------');
// console.log(instance);
