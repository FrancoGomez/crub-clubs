/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */

const deleteClub = async (tla) => {
  await fetch(`http://localhost:${PORT}/${tla}`, {
    method: 'delete',
  });
};

const setDeleteButton = (id, tla) => {
  const $element = document.querySelector(`#${id}`);

  $element.addEventListener('click', () => deleteClub(tla));
};
