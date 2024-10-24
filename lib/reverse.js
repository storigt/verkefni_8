import { isString } from './helpers.js';

/**
 * Reverses a given string.
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string, or an empty string if input is invalid.
 */
export function reverse(str) {
  if (!isString(str)) {
    return '';
  }

  return str.split('').reverse().join('');
}
