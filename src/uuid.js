/**
 * UUID generator
 *   Use the `crypto` API to generate a UUID, complient with RFC4122 version 4.
 *   https://www.ietf.org/rfc/rfc4122.txt
 * @returns {string | * | void}
 */
function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  ); // uuid() -> "7982fcfe-5721-4632-bede-6000885be57d"
}

module.exports = uuid;
