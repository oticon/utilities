/**
 * @type {{difference: *, intersection: *, union: *, similarity: *, chunk: *, countOccurrences: *, flatten: *, unique: *, shuffle: *, asset, log, parse, parameters: *, redirect: *, uuid}}
 */
module.exports = {
  // Array
  difference: require('./array').difference,
  intersection: require('./array').intersection,
  union: require('./array').union,
  similarity: require('./array').similarity,
  chunk: require('./array').chunk,
  countOccurrences: require('./array').countOccurrences,
  flatten: require('./array').flatten,
  unique: require('./array').unique,
  shuffle: require('./array').shuffle,

  // Asset
  asset: require('./asset'),

  // Log
  log: require('./log'),

  // Parse
  parse: require('./parse'),

  // URL
  parameters: require('./URL').parameters,
  redirect: require('./URL').redirect,

  // UUID
  uuid: require('./UUID'),
};
