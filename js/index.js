const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const success = document.getElementById("success");

var validName = false;
var validPhone = false;
var validemail = false;

name.addEventListener("blur", (e) => {
  let regx = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
  let str = name.value;

  if (regx.test(str)) {
    validName = true;
    name.classList.remove("is-invalid");
  } else {
    const warning = document.getElementById("alert-warning");

    let html = `<div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                > 
                <strong>HEY YOU!</strong> Yes you... You fuked up.
                <button
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div
                >
                `;
    name.classList.add("is-invalid");
    warning.innerHTML += html;
  }
});

email.addEventListener("blur", (e) => {
  let regx = /^([a-z_\.0-9]+)@([a-z_\.0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;

  if (regx.test(str)) {
    validemail = true;
    email.classList.remove("is-invalid");
  } else {
    const warning = document.getElementById("alert-warning");

    let html = `<div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                > 
                <strong>HEY YOU!</strong> Yes you... You fuked up.
                <button
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div
                >
                `;
    email.classList.add("is-invalid");
    warning.innerHTML += html;
  }
});

phone.addEventListener("blur", (e) => {
  let regx = /(\+ *\s)?[0-9]{10}$/;
  let str = phone.value;

  if (regx.test(str)) {
    validPhone = true;
    phone.classList.remove("is-invalid");
  } else {
    const warning = document.getElementById("alert-warning");

    let html = `<div
                  class="alert alert-warning alert-dismissible fade show"
                  role="alert"
                > 
                <strong>HEY YOU!</strong> Yes you... You fuked up.
                <button
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div
                >
                `;
    phone.classList.add("is-invalid");
    warning.innerHTML += html;
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("submitted");

  if (validName && validPhone && validemail) {
    let html = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your travel request has been successfully
      submitted
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
  `;
    success.innerHTML = html;
  } else {
    console.log("no");
  }
});
