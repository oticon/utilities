/**
 * asset function
 * @param asset
 * @param path
 * @param url
 * @returns {*}
 */
export function asset(asset, path, url) {
  if (process.env.NODE_ENV === "production") {
    return "." + asset + path;
  }

  return asset + url;
}
