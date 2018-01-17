/**
 * Array union
 *   Create a `Set` with all values of `a` and `b` convert to an array.
 * @param a
 * @param b
 * @returns {any[]}
 */
function union(a, b) {
  return Array.from(new Set([...a, ...b])); // union([1,2,3], [4,3,2]) -> [1,2,3,4]
}

export { union };
