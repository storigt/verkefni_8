import { analyse } from './lib/analyse.js';
import { resetForm } from './lib/reset.js';

document.addEventListener('DOMContentLoaded', () => {
  const textareaElement = document.querySelector("textarea");
  const formElement = document.querySelector("form");
  const resetButton = document.querySelector('button[type="reset"]');
  
  function submitHandler(event) {
    event.preventDefault();

    const text = textareaElement.value.trim();
    if (!text) {
      alert('Vinsamlegast sláðu inn texta!');
      return;
    }

    analyse(text);
  }

  textareaElement.addEventListener('input', () => {
    const text = textareaElement.value.trim();
    if (text) {
      analyse(text); 
    }
  });

  formElement.addEventListener("submit", submitHandler);
  resetButton.addEventListener('click', resetForm);
});
