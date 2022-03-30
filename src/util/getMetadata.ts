/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { firebaseAnnotation } from '../constant/metadata';

export function getMetadata({
  target,
  propertyKey,
  annotation = firebaseAnnotation,
}: {
  target: any;
  propertyKey: string | symbol;
  annotation?: string;
}): any[] {
  const keys: any[] = Reflect.getMetadataKeys(target, propertyKey);
  const decorators = keys
    .filter((key) => key.toString().startsWith(annotation))
    .reduce((values, key) => {
      const currValues = Reflect.getMetadata(key, target, propertyKey);
      return values.concat(currValues);
    }, []);

  return decorators;
}
