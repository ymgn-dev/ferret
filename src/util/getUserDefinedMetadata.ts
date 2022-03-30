import { userDefinedMetadataKey } from '../constant/metadata';

export function getUserDefinedMetadata({
  target,
  propertyKey,
}: {
  target: any;
  propertyKey: string | symbol;
}) {
  return Reflect.getMetadata(userDefinedMetadataKey, target, propertyKey);
}
