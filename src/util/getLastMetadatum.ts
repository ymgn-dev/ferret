import { firebaseAnnotation } from '../constant/metadata';
import { getMetadata } from './getMetadata';

export function getLastMetadatum({
  target,
  propertyName,
  annotation = firebaseAnnotation,
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}): any {
  const decorators = getMetadata({ target, propertyName, annotation });
  return decorators.length > 0 ? decorators[decorators.length - 1] : undefined;
}
