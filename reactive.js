import { isObj } from "./utils.js";
import { handler } from "./handler.js";

const targetMap = new WeakMap();

export function reactive(target) {
  // 不是对象直接返回
  if (!isObj(target)) {
    return target;
  }

  if (targetMap.get(target)) {
    return targetMap.get(target);
  }

  const proxy = new Proxy(target, handler);
  targetMap.set(target, proxy);
  return proxy;
}
