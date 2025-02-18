function validateField(fieldId) {
  var field = document.getElementById(fieldId);
  var messageId = "message_" + fieldId; // xac dinh id cua span
  if (field.value.trim() === "") {
    document.getElementById(messageId).innerText =
      "Không được bỏ trống " + fieldId + " !!!";
  } else {
    document.getElementById(messageId).innerText = "";
  }
}
validateField();

function validatePassword() {
  const enterPass = document.getElementById("password").value.trim();
  const reEnter = document.getElementById("re_enter_password").value.trim();
  const message = document.getElementById("message_re_enter_password");
  if (enterPass !== reEnter) {
    document.getElementById("message_re_enter_password").innerText =
      "Không khớp";
  } else {
    document.getElementById("message_re_enter_password").innerText = "";
  }
}

document
  .getElementById("re_enter_password")
  .addEventListener("click", validatePassword);
