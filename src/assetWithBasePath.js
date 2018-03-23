/**
 * assetWithBasePath
 * @param asset
 * @param basePath
 * @param isProd
 * @returns {*}
 */
function assetWithBasePath(asset, basePath, isProd) {
  if (process.env.NODE_ENV === "production" && isProd === true) {
    if (asset.mediapath === undefined || asset.mediaurl === undefined) {
      return undefined;
    }

    return basePath + asset.mediapath;
  }

  return asset.mediaurl;
}

export { assetWithBasePath };
