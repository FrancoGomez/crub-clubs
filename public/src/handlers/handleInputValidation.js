/* eslint-disable no-unused-vars */
const validateInput = (id) => {
  const $input = document.querySelector(`#${id}`);

  if ($input.value && !$input.classList.contains('is-valid')) {
    $input.classList.remove('is-invalid');
    $input.classList.add('is-valid');
  } else if ($input.required && !$input.value && !$input.classList.contains('is-invalid')) {
    $input.classList.remove('is-valid');
    $input.classList.add('is-invalid');
  }

  if (!$input.required && !$input.value) {
    $input.classList.remove('is-valid');
  }
};
