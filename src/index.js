/**
 * @type {{difference: difference, intersection: intersection, union: union, similarity: similarity, chunk: chunk, countOccurrences: countOccurrences, flatten: flatten, unique: unique, shuffle: shuffle, asset: asset, log: log, parse: parse, parameters: parameters, redirect: redirect, uuid: uuid}}
 */
module.exports = {
  difference: require('./array/difference'),
  intersection: require('./array/intersection'),
  union: require('./array/union'),
  similarity: require('./array/similarity'),
  chunk: require('./array/chunk'),
  countOccurrences: require('./array/countOccurrences'),
  flatten: require('./array/flatten'),
  unique: require('./array/unique'),
  shuffle: require('./array/shuffle'),
  asset: require('./asset'),
  log: require('./log'),
  parse: require('./parse'),
  parameters: require('./url/parameters'),
  redirect: require('./url/redirect'),
  uuid: require('./uuid'),
};
