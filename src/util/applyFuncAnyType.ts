export function applyFuncAnyType(instance: any, callback: Function, ...moreArgs: any[]) {
  if (Array.isArray(instance)) {
    return instance.map((item) => callback(item, ...moreArgs));
  }
  return callback(instance, ...moreArgs);
}
