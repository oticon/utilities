/**
 * assetWithBasePath
 * @param asset
 * @param basePath
 * @returns {*}
 */
function assetWithBasePath(asset, basePath, dev) {
  if (process.env.NODE_ENV === "production" && !dev) {
    if (asset.mediapath === undefined || asset.mediaurl === undefined) {
      return undefined;
    }

    return basePath + asset.mediapath;
  }

  return asset.mediaurl;
}

export { assetWithBasePath };
