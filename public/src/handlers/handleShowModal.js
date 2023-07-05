/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const showModal = (id) => {
  const $modal = document.querySelector(`#${id}`);

  const $bootstrapModal = new bootstrap.Modal($modal);

  $bootstrapModal.show();
};
