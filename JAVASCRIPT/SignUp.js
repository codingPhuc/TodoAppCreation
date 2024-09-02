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
    location.assign("../HTML/signIn.html");
  }
}
function redirectLogin() {
  location.assign("../HTML/signIn.html");
}

// event listener
document
  .getElementById("sign-in-redirect-button")
  .addEventListener("click", redirectLogin);
document.getElementById("sign-up-button").addEventListener("click", signup);

function toWeirdCase(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    var characters = words[i].split("");
    for (var j = 0; j < characters.length; j++) {
      if (j % 2 === 0) {
        characters[j] = characters[j].toUpperCase();
      } else {
        characters[j] = characters[j].toLowerCase();
      }
    }
    words[i] = characters.join("");
  }
  var result = words.join(" ");
  return result;
}

var countBits = function (n) {
  let countNumberOfBits = 0;
  while (n > 0) {
    if (n % 2 == 1) countNumberOfBits++;
    n = Math.floor(n / 2);
  }
  return countNumberOfBits;
};
