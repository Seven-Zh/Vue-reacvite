export function track(target, type, key) {
  console.log(`%c依赖收集${key}------${type}`, "color: #f00");
}
export function trigger(target, type, key) {
  console.log(`%c派发更新${key}------${type}`, "color: #00f");
}
