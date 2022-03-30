import { userDefinedAnnotation } from '../constant/metadata';
import { getMetadata } from './getMetadata';

export function isUserDefined({
  target,
  propertyName,
  annotation = userDefinedAnnotation,
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}) {
  const userDefinedDecorators = getMetadata({ target, propertyName, annotation });
  return userDefinedDecorators.length > 0;
}
