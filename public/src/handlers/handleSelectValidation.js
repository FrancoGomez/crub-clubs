/* eslint-disable no-unused-vars */
const validateSelect = (id) => {
  const $select = document.querySelector(`#${id}`);

  if ($select.required && $select.value && !$select.classList.contains('is-valid')) {
    $select.classList.remove('is-invalid');
    $select.classList.add('is-valid');
  } else if ($select.required && !$select.value && !$select.classList.contains('is-invalid')) {
    $select.classList.remove('is-valid');
    $select.classList.add('is-invalid');
  }
};
