// Assignment code here
var numbers = "1234567890"
var letters = "abcdefghijklmnopqrstuvwxyz"
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbols = "!@#$%^&*"
var pollOfCharacters = ""


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt('pick a number between 8 and 128')
  if (passwordLength < 8 || passwordLength > 128 ){
    return 
  }
  var wantsUppercase = confirm('Do you want uppercase?')
  console.log (wantsUppercase);
  if (wantsUppercase ) {
    pollOfCharacters += capLetters 
  }
  var wantsLowerCase = confirm('Do you want lowercase?')
  console.log (wantsLowerCase);
  if (wantsLowerCase) {
    pollOfCharacters += letters
  }
  var wantsSymbols = confirm('Do you want symbols?')
  console.log (wantsSymbols) 
  if (wantsSymbols) {  
    pollOfCharacters += symbols 
  }
  console.log(pollOfCharacters)
}

// Write password to the #password input
function writePassword() 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);