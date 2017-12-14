/**
 * We first assign the local variable `arrayFn` to the implicit `exports` object and then
 * assigns function references to the properties of `arrayFn`. Because `arrayFn` references
 * `exports` and `exports` is the object you get when you call `require("arrayFn")` anything
 * assigned to `arrayFn` will be available on the object you get from `require`.
 */
const arrayFn = module.exports;

/**
 * Array difference (complement)
 *   Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.
 * @param a
 * @param b
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
arrayFn.difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x)); // difference([1,2,3], [1,2]) -> [3]
};

/**
 * Array intersection (common values between two arrays)
 *   Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.
 * @param a
 * @param b
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
arrayFn.intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x)); // intersection([1,2,3], [1,2]) -> [2,3]
};

/**
 * Array union
 *   Create a `Set` with all values of `a` and `b` convert to an array.
 * @param a
 * @param b
 * @returns {any[]}
 */
arrayFn.union = (a, b) => {
  return Array.from(new Set([...a, ...b])); // union([1,2,3], [4,3,2]) -> [1,2,3,4]
};

/**
 * Array similarity
 *   Use `Array.filter()` to remove values that are not part of `values`, determined using `Array.includes()`.
 * @param arr
 * @param values
 * @returns {Int32Array | * | Uint32Array | T[] | Int8Array | Float64Array}
 */
arrayFn.similarity = (arr, values) => {
  return arr.filter(v => values.includes(v)); // similarity([1,2,3], [1,2,4] -> [1,2]
};

/**
 * Array chunk
 *   Use `Array.apply()` to create a new array that fits the number of chunks that will be procued.
 *   Use `Array.map()` to map each element of the new array to a chunk the length of `size`.
 *   If the original array cannot be split evenly, the final chunk will contain the remaining elements.
 * @param arr
 * @param size
 * @returns {(any)[]}
 */
arrayFn.chunk = (arr, size) => {
  return Array
    .apply(null, { length: Math.ceil(arr.length / size) })
    .map((v, i) => arr.slice(i * size, i * size + size)); // chunk([1,2,3,4,5], 2) -> [[1,2], [3,4], 5]
};

/**
 * Array countOccurrences
 *   Use `Array.reduce()` to increment a counter each time you encounter the specific value inside the array.
 * @param arr
 * @param value
 */
arrayFn.countOccurrences = (arr, value) => {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0); // countOccurrences([1,1,2,1,2,3], 1) -> 3
};

/**
 * Array flatten
 *   Use `Array.reduce()` to get all elements inside the array and `concat()` to flatten them.
 * @param arr
 */
arrayFn.flatten = (arr) => {
  return arr.reduce((a, v) => a.concat(v), []); // flatten([1,[2],3,4]) -> [1,2,3,4]
};

/**
 * Array unique
 *   Use `Set` and the `...rest` operator to discard all duplicated values.
 * @param arr
 * @returns {*[]}
 */
arrayFn.unique = (arr) => {
  return [...new Set(arr)]; // unique([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
};

/**
 * Array shuffle
 *   Use `Array.sort()` to reorder elements, utilizing `Math.random()` to shuffle the sorting.
 * @param arr
 * @returns {*}
 */
arrayFn.shuffle = (arr) => {
  return arr.sort(() => Math.random() >= 0.5 ? -1 : 1); // shuffle([1,2,3]) -> [1,3,2]
};
