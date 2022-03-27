import 'reflect-metadata';
import { firebaseAnnotation } from '../constant/metadata';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getDecorators({
  target,
  propertyName,
  annotation = firebaseAnnotation,
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}): any[] {
  const keys: any[] = Reflect.getMetadataKeys(target, propertyName);
  const decorators = keys
    .filter((key) => key.toString().startsWith(annotation))
    .reduce((values, key) => {
      const currValues = Reflect.getMetadata(key, target, propertyName);
      return values.concat(currValues);
    }, []);

  return decorators;
}
