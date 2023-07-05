/* eslint-disable no-unused-vars */
const sendForm = (route, formId) => {
  fetch(`http://localhost:8080/${route}`, {
    method: 'post',
    body: new FormData(document.querySelector(`#${formId}`)),
  });
};
