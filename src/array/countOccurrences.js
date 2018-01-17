/**
 * Array countOccurrences
 *   Use `Array.reduce()` to increment a counter each time you encounter the specific value inside the array.
 * @param arr
 * @param value
 */
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0); // countOccurrences([1,1,2,1,2,3], 1) -> 3
}

export { countOccurrences };
