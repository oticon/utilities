/**
 * Array similarity
 *   Use `Array.filter()` to remove values that are not part of `values`, determined using `Array.includes()`.
 * @param arr
 * @param values
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
function similarity(arr, values) {
  return arr.filter(v => values.includes(v)); // similarity([1,2,3], [1,2,4] -> [1,2]
}

export { similarity };
