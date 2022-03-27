import { userDefinedMetadataKey } from '../constant/metadata';

export function getUserDefinedMetadata({
  target,
  propertyName,
}: {
  target: any;
  propertyName: string | symbol;
}) {
  return Reflect.getMetadata(userDefinedMetadataKey, target, propertyName);
}
