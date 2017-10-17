/**
 * shuffle function
 * @param arr
 * @returns {*}
 */
const shuffle = arr => {
  let currentIndex = arr.length, tempVal, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempVal = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = tempVal;
  }

  return arr;
};

module.exports = shuffle;
