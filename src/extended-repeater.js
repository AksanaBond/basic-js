const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  const repeatTimes = options.repeatTimes ?? 1;
  for (let i = 0; i < repeatTimes; i++) {
    let string = str;
    const additionsCount =
      options.additionRepeatTimes ?? (options.addition !== undefined ? 1 : 0);
    for (let j = 0; j < additionsCount; j++) {
      string = `${string}${options.addition}`;
      if (j < additionsCount - 1) {
        string += options.additionSeparator ?? "|";
      }
    }
    result = `${result}${string}`;
    if (i < repeatTimes - 1) {
      result = `${result}${options.separator ?? "+"}`;
    }
  }
  return result;
}

module.exports = {
  repeater,
};
