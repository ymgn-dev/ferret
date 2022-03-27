export function getUserDefinedMetadata({
  target,
  propertyName,
}: {
  target: any;
  propertyName: string | symbol;
}) {
  return Reflect.getMetadata('user-define:property', target, propertyName);
}
