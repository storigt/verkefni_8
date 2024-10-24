import { isString } from './helpers.js';
import { VOWELS } from './constants.js';

/**
 * Counts the number of vowels in a given string.
 * @param {string} str The string to analyze.
 * @returns {number} The number of vowels.
 */
export function vowels(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (VOWELS.includes(char)) {
        count++;
      }
    }
    return count;
  }
  return 0;
}
