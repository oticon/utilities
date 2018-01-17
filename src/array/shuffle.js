/**
 * Array shuffle
 *   Use `Array.sort()` to reorder elements, utilizing `Math.random()` to shuffle the sorting.
 * @param arr
 * @returns {*}
 */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5); // shuffle([1,2,3]) -> [2, 3, 1]
}

export { shuffle };
