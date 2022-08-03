// Assignment code here


//1. Prompt the user for criteria
//  a.make the password length 8-128
//  b.Include uppercase, lowercase, numbers, special characters
//2. Validate user input
//3. Generate password based on criteria 
//4. Display password to screen or an alert

//function to create a random number
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}


//function to make the list random
function getRandomItem(list) {
  return list [randomInt(list.length)]
}


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  //prompt the user for password length
  var userInput = window.prompt('How long would you like your password to be? Pick a number between 8 and 128.'); 
  var passwordLength = userInput
  
  //if statement to check the if the userInput is valid
  if (passwordLength === '' || password === null) {
  window.alert('You must enter a valid number between 8 and 128.')
} else if (passwordLength < 8 || passwordLength >128) {
  window.alert('You must pick a valid number.')
} else 


  //arrays the password can include
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var symbols = ['!', '@', '#', '$', '%', '^', '&', '*']
  var pollOfCharacters = []

  //Adds the array to the random list depending on how the user answers the prompts
  var wantsNumbers = window.confirm('Would you like to inclue numbers?')
  if (wantsNumbers === true) {
    pollOfCharacters.push(numbers);
  }

  var wantsLowercase = window.confirm('Would you like to include Lowercase letters?')
  if (wantsLowercase === true) {
    pollOfCharacters.push(letters);
  }

  var wantsUppercase = window.confirm('Would you like to include Uppercase letters?')
  if (wantsUppercase === true) {
    pollOfCharacters.push(capLetters);
  }

  var wantsSymbols = window.confirm('Would you like to include symbols?')
  if (wantsSymbols === true) {
    pollOfCharacters.push(symbols);
  }

  if (pollOfCharacters.length === 0) {
    pollOfCharacters.push(letters);
  }

var generatePassword = ''

// for loop to create password with the users input
for (i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(pollOfCharacters)
  var randomCharacters = getRandomItem(randomList)
  generatePassword += randomCharacters
}

return generatePassword

} 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
} 
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);