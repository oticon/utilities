/**
 * Array difference (complement)
 *   Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.
 * @param a
 * @param b
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
function difference(a, b) {
  const s = new Set(b);
  return a.filter(x => !s.has(x)); // difference([1,2,3], [1,2]) -> [3]
}

module.exports = difference;
