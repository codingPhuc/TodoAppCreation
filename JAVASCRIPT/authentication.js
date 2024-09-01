// support method

// main method
function login() {}
function signup() {
  const signUpUserName =
    getElementById("sign-up-form").getElementById("username");
  const signUpPassword =
    getElementById("sign-up-form").getElementById("password");
  console.log(signUpUserName);
  console.log(signUpPassword);
}
function redirectLogin() {}
// event listener
document.getElementById("sign-in-button").addEventListener("submit", login);
document.getElementById("sign-up-button").addEventListener("click", signup);
document
  .getElementById("sign-in-redirect-button")
  .addEventListener("click", redirectLogin);
