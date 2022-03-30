import { userDefinedAnnotation } from '../constant/metadata';
import { getMetadata } from './getMetadata';

export function isUserDefined({
  target,
  propertyKey,
  annotation = userDefinedAnnotation,
}: {
  target: any;
  propertyKey: string | symbol;
  annotation?: string;
}) {
  const userDefinedDecorators = getMetadata({ target, propertyKey, annotation });
  return userDefinedDecorators.length > 0;
}
