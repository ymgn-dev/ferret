export function applyFuncAnyType(instance: any, callback: Function) {
  if (Array.isArray(instance)) {
    return instance.map((item) => callback(item));
  }
  return callback(instance);
}
