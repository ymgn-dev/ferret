import { ClassConstructor } from 'class-transformer';

export function UserDefined<T>(cls: ClassConstructor<T>) {
  return (target: any, propertyKey: string | symbol) => {
    Reflect.defineMetadata('user-define:property', cls, target, propertyKey);
  };
}
