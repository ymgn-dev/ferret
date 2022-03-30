# Ferret

Ferret is a model serialization library for the Firebase JavaScript SDK.

## Serialize / Deserialize

```ts
let model = new Sample();
model.id = '1';
model.name = 'sample_name';
model.createdAt = undefined;
model.updatedAt = undefined;

// Serialize
const json = serialize(model);

console.log(json);
// {
//   id: '1',
//   name: 'sample_name',
//   createdAt: FieldValue.serverTimestamp(),
//   updatedAt: FieldValue.serverTimestamp(),
// }

// Deserialize
const instance = deserialize(
  { id: '1', name: 'sample_name', createdAt: Timestamp.now(), updatedAt: Timestamp.now() },
  Sample,
);

console.log(instance);
// Sample {
//   id: '1',
//   name: 'sample_name',
//   createdAt: 2022-03-27T08:06:11.170Z, // Date
//   updatedAt: 2022-03-27T08:06:11.170Z // Date
// }

```

## Decorators

### CreatedAt

Decorator that converts to serverTimestamp() if the property is undefined when serializing.
It also automatically performs normal Date⇄Timestamp conversions.

```ts
class Sample {
    @CreatedAt
    createdAt?: Date;
}
```

### UpdatedAt

Decorator that converts to serverTimestamp each time when serializing.
It also automatically performs normal Date⇄Timestamp conversions.

```ts
class Sample {
    @UpdatedAt
    updatedAt?: Date;
}
```

### UserDefined

To have your own defined type as a property, use the UserDefined decorator.
You can serialize your own types even if they use other decorators internally.

```ts
export class Child {
  id?: string;

  name?: string;

  @UpdatedAt
  updatedAt?: Date;
}

export class Parent {
  id?: string;

  @UpdatedAt
  updatedAt?: Date;

  @UserDefined(Child)
  child: Child;
}
```

### Geo

Decorator for serializing GeoPoint in Firestore.

```ts
class Sample {
    @Geo
    geoPoint?: GeoPoint;
}
```

## Array type support

The above decorators also support array type properties.
There is no need to change any code, just make it an array type.

```ts
export class Parent {
  id?: string;

  @UpdatedAt
  updatedAt?: Date;

  @UserDefined(Child)
  children: Child[];
}

const model = new Parent();
...
const json = serialize(model);
console.log(json);
// {
//   id: '2',
//   updatedAt: FieldValue.serverTimestamp(),
//   children: [
//     {
//       id: '0',
//       name: 'sample_name0',
//       createdAt: FieldValue.serverTimestamp(),
//       updatedAt: FieldValue.serverTimestamp(),
//     },
//     {
//       id: '1',
//       name: 'sample_name1',
//       createdAt: FieldValue.serverTimestamp(),
//       updatedAt: FieldValue.serverTimestamp(),
//     }
//   ]
// }
```

## TODO

- [x] Support for nested properties
- [x] Support for Array type properties
- [ ] Implementation of additional decorators