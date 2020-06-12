// Assignment Code
var generateBtn = document.querySelector("#generate");
var speOptions = "!@#$%^&*()_+-=";
// console.log(speOptions);
var numOptions = "0123456789";
// console.log(numOptions);
var lowerOptions = "abcdefghijklmnopqrstuvwxyz";
// console.log(lowerOptions);
var upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(upperOptions);
var allOptions = speOptions + numOptions + lowerOptions + upperOptions;
// console.log(allOptions);
var finalOptions = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var userLength = window.prompt("Please enter your desired password length");

  if (userLength < 8) {
    alert("Your password must be at least 8 characters long");
    return;
  }
  else if (userLength > 128) {
    alert("Your password cannot be greater than 128 characters");
    return;
  }
  else if (isNaN(userLength)) {
    alert("Only numerical values are accepted");
    return;
  }
  else {
    var proceed = true;
  }

  if (proceed === true) {
    var speChars = window.confirm("Would you like your password to contain special characters?");
    if (speChars === true) {
      finalOptions = finalOptions + speOptions;
      // console.log(finalOptions);
    }
    var numChars = window.confirm("Would you like your password to contain numbers?");
    if (numChars === true) {
      finalOptions = finalOptions + numOptions;
      // console.log(finalOptions);
    }
    var lowerChars = window.confirm("Would you like your password to contain lower case letters?");
    if (lowerChars === true) {
      finalOptions = finalOptions + lowerOptions;
    }
    var upperChars = window.confirm("Would you like your password to contain upper case letters?");
    if (upperChars === true) {
      finalOptions = finalOptions + upperOptions;
    }
    console.log(finalOptions);
  }

  // Code wouldn't work without this else statement
  else {
    alert('error');
  }

  if (speChars === true || numChars === true || lowerChars === true || upperChars === true) {
    function generatePassword() {

    }
  }

  else {
    alert("Your password must contain at least one of the previous criteria");
  }



  // Write password to the #password input
  function writePassword() {
    var password = "";
    for (var i = 0; i <= userLength; i++) {
      password = password + finalOptions.charAt(Math.floor(Math.random() * Math.floor(finalOptions.length - 1)));
    }
    document.getElementById("password").value = password;
  }

  writePassword();

  // location.reload();



}