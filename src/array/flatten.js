/**
 * Array flatten
 *   Use `Array.reduce()` to get all elements inside the array recursively and `concat()` to flatten them.
 * @param arr
 */
function flatten(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

export { flatten };
