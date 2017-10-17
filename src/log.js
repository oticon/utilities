import Raven from "raven-js";

function log(ex, context) {
  Raven.captureException(ex, {extra: context});

  if (process.env.NODE_ENV === "production") {
    window.console && console.error && console.error(ex);
  }
}

module.exports = log;
