/* eslint-disable no-unused-vars */
const areThereInvalidElements = () => document.querySelector('.is-invalid');

const ifFormValid = (doIfValidated, param) => {
  if (areThereInvalidElements()) return null;

  doIfValidated(param);

  return null;
};
