import Raven from "raven-js";

/**
 * log fn
 * @param ex
 * @param extra
 */
function log(ex, extra) {
  Raven.captureException(ex, { extra });

  if (process.env.NODE_ENV === "production") {
    window.console && console.error && console.error(ex);
  }
}

module.exports = log;
