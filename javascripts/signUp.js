// support method
function validate(signUpUserName, signUpPassword, confirmPassword, arrUser) {
  if (signUpPassword.value !== confirmPassword.value) {
    alert("incorrect reenter password");
    return false;
  }
  if (arrUser) {
    let existingUser = arrUser.find(
      (user) => user.name === signUpUserName.value
    );
    if (existingUser) {
      alert("user already exit");
      return false;
    }
  }
  return true;
}
// main method
function signup() {
  let arrUser = JSON.parse(localStorage.getItem("user")) || [];
  signUpUserName = document.getElementById("username");
  signUpPassword = document.getElementById("password");
  confirmPassword = document.getElementById("confirmPassword");
  if (validate(signUpUserName, signUpPassword, confirmPassword, arrUser)) {
    user = {
      id: Date.now(),
      name: signUpUserName.value,
      password: confirmPassword.value,
    };
    arrUser.push(user);
    localStorage.setItem("user", JSON.stringify(arrUser));
    location.assign("../html/signIn.html");
  }
}
function redirectLogin() {
  location.assign("../html/signIn.html");
}

// event listener
document
  .getElementById("sign-in-redirect-button")
  .addEventListener("click", redirectLogin);
document.getElementById("sign-up-button").addEventListener("click", signup);
