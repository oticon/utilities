/**
 * assetWithBasePath
 * @param asset
 * @param basePath
 * @returns {*}
 */
function assetWithBasePath(asset, basePath) {
  if (process.env.NODE_ENV === "production") {
    if (asset.mediapath === undefined || asset.mediaurl === undefined) {
      return undefined;
    }

    return basePath + asset.mediapath;
  }

  return asset.mediaurl;
}

export { assetWithBasePath };
