var characterLength;
var choiceArr = [];

var specialCharacterArr = ['?',',','!','#','[',']','{','}','-','.','|'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];

// Connecting to the button on HTML
var generateBtn = document.querySelector("#generate");

// Event listener to trigger button when clicked
generateBtn.addEventListener("click", writePassword);

// Displays password based on math

function writePassword() {
  var Prompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (Prompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Identifies user choice of characters
function getPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt("How long do you want your password to be?"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Length has to be a number between 8-128. Please try again.");
    return false;
  }
  if (confirm("Would you like to include lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like to include uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceArr = choiceArr.concat(specialCharacterArr);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

// Random generation of password using characters specified
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}