/**
 * asset
 * @param asset
 * @param path
 * @param url
 * @returns {*}
 */
module.exports.asset = (asset, path, url) => {
  if (process.env.NODE_ENV === "production") {
    if (asset[path] === undefined) {
      return undefined;
    }

    return "." + asset[path];
  }

  return asset[url];
};
