import { getDecorators } from './getDecorators';

export function isUserDefined({
  target,
  propertyName,
  annotation = 'user-define:',
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}) {
  const userDefinedDecorators = getDecorators({ target, propertyName, annotation });
  return userDefinedDecorators.length > 0;
}
