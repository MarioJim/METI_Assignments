window.onload = () => {
  const emailField = document.getElementById("email");
  const emailConfirmField = document.getElementById("email_confirm");
  const emailErrorAlert = document.getElementById("email_error_alert");
  emailConfirmField.addEventListener("input", (_) => {
    if (emailField.value !== emailConfirmField.value) {
      emailErrorAlert.style.display = "block";
      emailConfirmField.classList.add("alert_bg");
    } else {
      emailErrorAlert.style.display = "none";
      emailConfirmField.classList.remove("alert_bg");
    }
  });

  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.email.value !== form.email_confirm.value) {
      const element = document.createElement("p");
      const message = document.createTextNode("Email does not match");
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
      setTimeout(() => {
        form.removeChild(element);
      }, 3000);
    } else {
      form.submit();
    }
  });
};
