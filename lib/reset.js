export function resetForm() {
  // Hide the output section
  const outputElement = document.querySelector('.output');
  if (outputElement) {
    outputElement.classList.add('hidden');
  }

  // Reset the content to initial hardcoded state
  document.querySelector('.input').textContent = 'Halló hæ heimur!';
  document.querySelector('.longest').textContent = 'heimur!';
  document.querySelector('.shortest').textContent = 'hæ';
  document.querySelector('.vowels').textContent = '6';
  document.querySelector('.consonants').textContent = '7';
  document.querySelector('.palindrome').textContent = 'ekki';

  // Optionally, also clear the textarea input
  const textareaElement = document.querySelector('textarea');
  if (textareaElement) {
    textareaElement.value = '';
  }
}
