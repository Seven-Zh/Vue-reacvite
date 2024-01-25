import { track, trigger } from "./effect.js";
import { isObj, hasChanged } from "./utils.js";
import { trackOpTypes, triggerOpTypes } from "./operation.js";
import { reactive } from "./reactive.js";

const arrayInstrumentations = {};

["includes", "indexOf", "lastIndexOf"].forEach((key) => {
  arrayInstrumentations[key] = function (...arg) {
    const res = Array.prototype[key].apply(this, arg);
  };
});

function get(target, key, receiver) {
  track(target, trackOpTypes.GET, key);
  const res = Reflect.get(target, key, receiver); //用receiver是因为this指向问题
  if (isObj(res)) {
    return reactive(res);
  }
  return res;
}

//a in obj
function has(target, key) {
  track(target, trackOpTypes.HAS, key);
  return Reflect.has(target, key);
}

//Object.keys(obj)  for
function ownKeys(target) {
  track(target, trackOpTypes.ITERATE);
  return Reflect.ownKeys(target);
}

function set(target, key, value, receiver) {
  const type = target.hasOwnProperty(key)
    ? triggerOpTypes.SET
    : triggerOpTypes.ADD;
  const oldValue = target[key]; //这里不能用Reflect反射是因为会触发依赖收集，显然这不应该
  // 如果设置不成功，不触发派发更新
  const res = Reflect.set(target, key, value);
  if (!res) {
    return res;
  }
  if (hasChanged(value, oldValue) || type === triggerOpTypes.ADD) {
    trigger(target, type, key);
  }
  return res;
}

function deleteProperty(target, key) {
  trigger(target, triggerOpTypes.DELETE, key);
  return Reflect.deleteProperty(target, key);
}

export const handler = {
  get,
  set,
  ownKeys,
  deleteProperty,
  has,
};
