const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString();
  maxDigit = 0;
  for (let i = 0; i < number.length; i++) {
     let delDigit = parseInt(number.replace(number[i], ''));
     delDigit > maxDigit ? maxDigit = delDigit : maxDigit;
  }
  return maxDigit;

}

module.exports = {
  deleteDigit
};
