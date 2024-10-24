import { isString, splitOnWhitespace } from './helpers.js';

/**
 * Finds the shortest word in a given string.
 * @param {string} str The string to analyze.
 * @returns {string|null} The shortest word, or null if input is not valid.
 */
export function shortest(str) {
  if (!isString(str)) {
    return null;
  }

  const words = splitOnWhitespace(str);
  let shortestWord = words[0] || "";

  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}
