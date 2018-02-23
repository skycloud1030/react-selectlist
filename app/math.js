export const isArray = Array.isArray;
export function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
export function radomString() {
  return Math.random()
    .toString(36)
    .substring(2, 15);
}
