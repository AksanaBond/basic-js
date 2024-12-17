const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let stringS2 = s2;
  let arrayS1 = s1.split("");
  arrayS1.forEach((el) => {
     if (stringS2.includes(el)) {
      stringS2 = stringS2.slice(0, stringS2.indexOf(el)) + stringS2.slice(stringS2.indexOf(el) + 1, stringS2.length);
      sum += 1;
     }
  })
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
