// import { Timestamp } from 'firebase/firestore';
// import { Child, Parent } from './model/sample';
// import { deserialize } from './serialize/deserialize';
// import { serialize } from './serialize/serialize';
// let model = new Parent();
// model.id = '2';
// model.updatedAt = [new Date(), new Date()];
// model.child = new Child();
// model.child.id = '3';
// model.child.name = 'child_name';
// model.child.updatedAt = undefined;
// model.child.createdAt = undefined;
// model.children = [new Child(), new Child(), new Child()];
// for (let i = 0; i < 3; i++) {
//   model.children[i].id = `${i}`;
//   model.children[i].name = `sample_name${i}`;
//   model.children[i].createdAt = undefined;
//   model.children[i].updatedAt = undefined;
// }
// const json = serialize(model);
// console.log('--------- serialize ---------');
// console.log(json);
// const instance = deserialize(
//   {
//     id: '2',
//     updatedAt: [Timestamp.now(), Timestamp.now()],
//     child: { id: '0', name: 'sample_name0', createdAt: new Date(), updatedAt: new Date() },
//     children: [
//       { id: '1', name: 'sample_name', createdAt: new Date(), updatedAt: new Date() },
//       { id: '2', name: 'sample_nam2', createdAt: new Date(), updatedAt: new Date() },
//     ],
//   },
//   Parent,
// );
// console.log('--------- deserialize ---------');
// console.log(instance);

// import 'reflect-metadata';
// import { assert, expect, test } from 'vitest';
// import { CreatedAt } from '../decorator/createdAt';
// import { UpdatedAt } from '../decorator/updatedAt';
// import { UserDefined } from '../decorator/userDefined';

// // Edit an assertion and save to see HMR in action

// test('Math.sqrt()', () => {
//   expect(Math.sqrt(4)).toBe(2);
//   expect(Math.sqrt(144)).toBe(12);
//   expect(Math.sqrt(2)).toBe(Math.SQRT2);
// });

// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   };

//   const output = JSON.stringify(input);

//   expect(output).eq('{"foo":"hello","bar":"world"}');
//   assert.deepEqual(JSON.parse(output), input, 'matches original');
// });

// export class Child {
//   id?: string;

//   name?: string;

//   @CreatedAt
//   createdAt?: Date;

//   @UpdatedAt
//   updatedAt?: Date;
// }

// export class Parent {
//   id?: string;

//   @UpdatedAt
//   updatedAt?: Date[];

//   @UserDefined(Child)
//   children: Child[];

//   @UserDefined(Child)
//   child: Child;
// }
