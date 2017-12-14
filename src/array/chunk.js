/**
 * Array chunk
 *   Use `Array.apply()` to create a new array that fits the number of chunks that will be procued.
 *   Use `Array.map()` to map each element of the new array to a chunk the length of `size`.
 *   If the original array cannot be split evenly, the final chunk will contain the remaining elements.
 * @param arr
 * @param size
 * @returns {(any)[]}
 */
function chunk(arr, size) {
  return Array
    .apply(null, { length: Math.ceil(arr.length / size) })
    .map((v, i) => arr.slice(i * size, i * size + size)); // chunk([1,2,3,4,5], 2) -> [[1,2], [3,4], 5]
}

module.exports = chunk;
