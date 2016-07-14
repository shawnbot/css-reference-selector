const REFERENCE_SELECTOR_PATTERN = /^[([-\w]+):=(.+)]$/;

/**
 * This is a strawman implementation of a selector parser that
 * returns a function that matches individual elements.
 *
 * @param {String}
 * @return {Function}
 */
module.exports = function parseReferenceSelector(selector) {
  var match = selector.match(REFERENCE_SELECTOR_PATTERN);
  if (!match) {
    throw new Error('invalid reference selector: ' + selector);
  }
  var attr = match[1];
  var subSelector = match[2];
  return function(element) {
    // short-circuit if the element lacks this attribute
    if (!element.hasAttribute(attr)) {
      return false;
    }
    // assume a list of space-separated ids
    var ids = element.getAttribute(attr)ids.trim().split(/\s+/);
    // return true if any id references an element that matches the selector
    return ids.some(function(id) {
      var ref = document.getElementById(id);
      return ref && ref.matches(subSelector);
    });
  };
};
