import { longest } from './longest.js';
import { shortest } from './shortest.js';
import { reverse } from './reverse.js';
import { palindrome } from './palindrome.js';
import { vowels } from './vowels.js';
import { consonants } from './consonants.js';

/**
 * Analyzes a given string and updates the DOM with the results.
 * @param {string} text The input string to analyze.
 */
export function analyse(text) {
  const inputElement = document.querySelector('.input');

  if (!inputElement) {
    console.error('Input element not found');
    return;
  }

  inputElement.textContent = text;

  const longestWord = longest(text);
  const shortestWord = shortest(text);
  const reversedText = reverse(text);
  const vowelCount = vowels(text);
  const consonantCount = consonants(text);
  const isPalindromeText = palindrome(text) ? '' : 'ekki';

  document.querySelector('.longest').textContent = longestWord;
  document.querySelector('.shortest').textContent = shortestWord;
  document.querySelector('.reversed').textContent = reversedText;
  document.querySelector('.vowels').textContent = vowelCount;
  document.querySelector('.consonants').textContent = consonantCount;
  document.querySelector('.palindrome').textContent = isPalindromeText;

  const outputElement = document.querySelector('.output');
  if (outputElement) {
    outputElement.classList.remove('hidden'); 
  }
}


