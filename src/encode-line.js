const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str === '') {
    return str;
  };
  let sum = 1;
  let line = '';
  for(let i = 1; i < str.length; i++) {
    if(str[i] === str[i-1]) {
      sum += 1;
    }else {
      line += (sum > 1 ? sum : '') + str[i - 1];
      sum = 1;
    }
  }
  return line += (sum > 1 ? sum : '') + str[str.length-1];
}

module.exports = {
  encodeLine
};
