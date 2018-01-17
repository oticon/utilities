/**
 * URL redirect
 *   Use `window.location.href` or `window.location.replace()` to redirect to `url`.
 *   Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).
 * @param url
 * @param asLink
 */
function redirect(url, asLink = true) {
  return asLink ? window.location.href = url : window.location.replace(url); // redirect('https://oticon.com')
}

export { redirect };
