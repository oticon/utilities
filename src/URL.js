/**
 * URL parameters
 *   Use `match()` with an appropriate regular expression to get all key-value pairs.
 *   `Array.reduce()` to map and combine them into a single object.
 *   Pass `location.search` as the argument to apply to the current `url`.
 * @param url
 * @returns {{}}
 */
module.exports.parameters = (url) => {
  return url.match(/([^?=&]+)(=([^&]*))?/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  ); // parameters('http://url.com/?firstname=Sadi&lastname=Kaya') -> { firstname: "Sadi", lastname: "Kaya" }
};

/**
 * URL redirect
 *   Use `window.location.href` or `window.location.replace()` to redirect to `url`.
 *   Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).
 * @param url
 * @param asLink
 */
module.exports.redirect = (url, asLink = true) => {
  return asLink ? window.location.href = url : window.location.replace(url); // redirect('https://oticon.com')
};
