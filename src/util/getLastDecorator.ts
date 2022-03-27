import { getDecorators } from './getDecorators';

export function getLastDecorator({
  target,
  propertyName,
  annotation = 'firebase:',
}: {
  target: any;
  propertyName: string | symbol;
  annotation?: string;
}): any {
  const decorators = getDecorators({ target, propertyName, annotation });
  return decorators.length > 0 ? decorators[decorators.length - 1] : undefined;
}
