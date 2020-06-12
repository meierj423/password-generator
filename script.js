// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var userLength = window.prompt("Please enter your desired password length");

  if (userLength < 8) {
    alert("Your password must be at least 8 characters long");
  }
  else if (userLength > 128) {
    alert("Your password cannot be greater than 128 characters");
  }
  else if (isNaN(userLength)) {
    alert("Only numerical values are accepted")
  }
}

// From Office Hours
// function generatePassword() {
//   return "password"
// }