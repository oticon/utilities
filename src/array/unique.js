/**
 * Array unique
 *   Use `Set` and the `...rest` operator to discard all duplicated values.
 * @param arr
 * @returns {*[]}
 */
function unique(arr) {
  return [...new Set(arr)]; // unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
}

export { unique };
