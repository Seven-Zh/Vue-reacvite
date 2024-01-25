export function isObj(value) {
  return typeof value === "object" && value !== null;
}

export function hasChanged(n, o) {
  return Object.is(n, o);
}
