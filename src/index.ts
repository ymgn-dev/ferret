import { Timestamp } from 'firebase/firestore';
import { Child, Parent } from './model/sample';
import { deserialize } from './serialize/Deserialize';
import { serialize } from './serialize/serialize';

let model = new Parent();
model.id = '2';
model.updatedAt = [new Date(), new Date()];

model.children = [new Child(), new Child(), new Child()];

for (let i = 0; i < 3; i++) {
  model.children[i].id = `${i}`;
  model.children[i].name = `sample_name${i}`;
  model.children[i].createdAt = undefined;
  model.children[i].updatedAt = undefined;
}

const json = serialize(model);

console.log('--------- serialize ---------');
console.log(json);

const instance = deserialize(
  {
    id: '2',
    updatedAt: [Timestamp.now(), Timestamp.now()],
    child: [
      { id: '1', name: 'sample_name', createdAt: new Date(), updatedAt: new Date() },
      { id: '2', name: 'sample_nam2', createdAt: new Date(), updatedAt: new Date() },
    ],
  },
  Parent,
);
console.log('--------- deserialize ---------');
console.log(instance);
