/**
 * preloadImages fn
 * @param arr
 * @returns {Promise<[any]>}
 */
function preloadImages(arr) {
  const loadImage = src => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        resolve(img);
      };

      img.onerror = img.onabort = () => {
        reject(src);
      };

      img.src = src;
    });
  };

  let promises = [];
  for (let i = 0; i < arr.length; i++) {
    promises.push(loadImage(arr[i]));
  }

  return Promise.all(promises);
}

export { preloadImages };
