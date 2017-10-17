/**
 * asset function
 * @param asset
 * @param path
 * @param url
 * @returns {*}
 */
function asset(asset, path, url) {
  if (process.env.NODE_ENV === "production") {
    return "." + asset + path;
  }

  return asset + url;
}

module.exports = asset;
