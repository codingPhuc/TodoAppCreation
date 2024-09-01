// support method

function verifyUser(signUpUserName, signUpPassword, booleanRememberMe) {
  if (booleanRememberMe.checked) {
  } else {
  }
  return true;
}
function checkStorage() {}
// main method
function login() {
  const signInUserName = getElementById("username");
  const signInPassword = getElementById("password");
  const booleanRememberMe = getElementById("remember-me");
  if (verifyUser(signInUserName, signInPassword, booleanRememberMe)) {
  }
}
function redirectSignup() {
  location.assign("../HTML/signUp.html");
}
function redirectLogin() {}
// event listener
window.addEventListener("load", checkStorage);
document.getElementById("sign-in-button").addEventListener("submit", login);
document
  .getElementById("sign-up-button")
  .addEventListener("click", redirectSignup);
