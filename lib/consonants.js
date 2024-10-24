import { isString } from './helpers.js';
import { CONSONANTS } from './constants.js';

/**
 * Counts the number of consonants in a given string.
 * @param {string} str The string to analyze.
 * @returns {number} The number of consonants.
 */
export function consonants(str) {
  if (isString(str)) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (CONSONANTS.includes(char)) {
        count++;
      }
    }
    return count;
  }
  return 0;
}
