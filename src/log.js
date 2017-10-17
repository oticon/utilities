import Raven from "raven-js";

export function log(ex, context) {
  Raven.captureException(ex, {extra: context});

  if (process.env.NODE_ENV === "production") {
    window.console && console.error && console.error(ex);
  }
}
