# Firebase JSON Serializer

A collection of methods to serialize a model for storage in a Firestore or to deserialize JSON retrieved from a Firestore into a model.

## Decorators

### CreatedAtConverter

Decorator that converts to serverTimestamp() if the property is undefined when serializing.
It also automatically performs normal Date⇄Timestamp conversions.

```ts
class Sample {
    @CreatedAtConverter
    createdAt?: Date;
}
```

### UpdatedAtConverters

Decorator that converts to serverTimestamp each time when serializing.
It also automatically performs normal Date⇄Timestamp conversions.

```ts
class Sample {
    @UpdatedAtConverter
    updatedAt?: Date;
}
```

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

## TODO

- [ ] Support for nested properties
- [ ] Implementation of additional decorators