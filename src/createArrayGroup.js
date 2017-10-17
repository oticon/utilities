/**
 * createArrayGroup function
 * @param arr
 * @param chunkSize
 * @returns {Array}
 */
function createArrayGroup(arr, chunkSize) {
  let groups = [], i;

  for (i = 0; i < arr.length; i += chunkSize) {
    groups.push(arr.slice(i, i + chunkSize));
  }

  return groups;
}

module.exports = createArrayGroup;
