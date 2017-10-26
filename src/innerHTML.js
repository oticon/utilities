/**
 * innerHTML function
 * https://facebook.github.io/react/docs/dom-elements.html#dangerouslysetinnerhtml
 * @param data
 * @returns {{__html: *}}
 */
function innerHTML(data) {
  return { __html: data };
}

export default innerHTML;
