import { isString } from './helpers.js';
import { reverse } from './reverse.js';

/**
 * Checks if a given string is a palindrome.
 * @param {string} str The string to check.
 * @returns {boolean} `true` if the string is a palindrome, otherwise `false`.
 */
export function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }

  return false;
}
