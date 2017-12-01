export const isArray = Array.isArray;

export function isUndefined(value) {
    return value === undefined;
}
export function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}