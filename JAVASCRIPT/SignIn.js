// support method

function queryUser(signInUserName, signInPassword, booleanRememberMe) {
  let arrUser = JSON.parse(localStorage.getItem("user"));
  if (!arrUser) {
    alert("user does not exit");
    return false;
  }
  let existingUser = arrUser.find(
    (user) =>
      user.name === signInUserName.value &&
      user.password === signInPassword.value
  );
  if (!existingUser) {
    alert("user name or password is incorrect");
    return false;
  }
  if (booleanRememberMe.checked) {
    localStorage.setItem("rememberMe", "true");
  } else {
    sessionStorage.setItem("rememberMe", "true");
    localStorage.setItem("rememberMe", "false");
  }
  return existingUser;
}
function checkStorage() {
  const rememberMeLocalStorage = JSON.parse(localStorage.getItem("rememberMe"));
  const rememberMeSessionStorage = JSON.parse(
    sessionStorage.getItem("rememberMe")
  );
  if (rememberMeLocalStorage || rememberMeSessionStorage) {
    location.assign("../HTML/main.html");
  }
}
// main method
function login() {
  const signInUserName = document.getElementById("username");
  const signInPassword = document.getElementById("password");
  const booleanRememberMe = document.getElementById("remember-me");
  user = queryUser(signInUserName, signInPassword, booleanRememberMe);
  if (user) {
    let arrUser = JSON.parse(localStorage.getItem("user"));
    arrUser.pop(user);
    arrUser.unshift(user);
    localStorage.setItem("user", JSON.stringify(arrUser));
    location.assign("../HTML/main.html");
  }
}
function redirectSignup() {
  location.assign("../HTML/signUp.html");
}
function redirectLogin() {}
// event listener
window.addEventListener("load", checkStorage);
document.getElementById("sign-in-button").addEventListener("click", login);
document
  .getElementById("sign-up-button")
  .addEventListener("click", redirectSignup);
// document
//   .getElementById("sign-up-button")
//   .addEventListener("click", checkStorage);
