export function applyFuncAnyType(target: any, callback: Function, ...moreArgs: any[]) {
  if (Array.isArray(target)) {
    return target.map((item) => callback(item, ...moreArgs));
  }
  return callback(target, ...moreArgs);
}
