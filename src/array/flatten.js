/**
 * Array flatten
 *   Use `Array.reduce()` to get all elements inside the array and `concat()` to flatten them.
 * @param arr
 */
function flatten(arr) {
  return arr.reduce((a, v) => a.concat(v), []); // flatten([1,[2],3,4]) -> [1,2,3,4]
}

export { flatten };
