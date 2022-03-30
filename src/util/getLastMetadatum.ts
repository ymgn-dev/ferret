import { firebaseAnnotation } from '../constant/metadata';
import { getMetadata } from './getMetadata';

export function getLastMetadatum({
  target,
  propertyKey,
  annotation = firebaseAnnotation,
}: {
  target: any;
  propertyKey: string | symbol;
  annotation?: string;
}): any {
  const decorators = getMetadata({ target, propertyKey, annotation });
  return decorators.length > 0 ? decorators[decorators.length - 1] : undefined;
}
