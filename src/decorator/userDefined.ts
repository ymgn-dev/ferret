import { ClassConstructor } from 'class-transformer';
import { userDefinedMetadataKey } from '../constant/metadata';

export function UserDefined<T>(cls: ClassConstructor<T>) {
  return (target: any, propertyKey: string | symbol) => {
    Reflect.defineMetadata(userDefinedMetadataKey, cls, target, propertyKey);
  };
}
