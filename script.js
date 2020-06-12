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
  else {
    var proceed = true;
  }

  if (proceed === true) {
    var speChars = window.confirm("Would you like your password to contain special characters?");
    var numChars = window.confirm("Would you like your password to contain numbers?");
    var lowerChars = window.confirm("Would you like your password to contain lower case letters?");
    var upperChars = window.confirm("Would you like your password to contain upper case letters?"); 
  }

  // Code wouldn't work without this else statement
  else {
    alert('error');
  }

  if (speChars === true || numChars === true || lowerChars === true || upperChars === true) {
    alert("proceed");
  }
  else {
    alert("Your password must contain at least one of the previous criteria");
  }
  
  
   
    
  
}
// var confirm = window.confirm("Would you like your password to contain special characters?")
//     alert("you chose " + confirm);

// From Office Hours
// function generatePassword() {
//   return "password"
// }