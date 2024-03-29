let shouldTrack = true;
export function pauseTracking() {
  shouldTrack = false;
}

export function resumeTracking() {
  shouldTrack = true;
}

export function track(target, type, key) {
  if(!shouldTrack){
    return
  }
  console.log(`%c依赖收集${key}------${type}`, "color: #f00");
}
export function trigger(target, type, key) {
  console.log(`%c派发更新${key}------${type}`, "color: #00f");
}
