// Query selector for the button.
var generateBtn = document.querySelector("#generate");

// Password character arrays.
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")","[", "]", "{", "}", "-", "_", "=", "+", "/", "<", ">",","];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// This function handles the stuff the user wants.
function options() {
  var Valid = false;
  do {
    var length = window.prompt("Choose a length between 8 and 128 characters.");
    var askNumber = window.confirm("Do you want to use numbers?");
    var askSymbol = window.confirm("Do you want to use symbols?");
    var askUpperCase = window.confirm("Do you want to use Upper-Case letters?");
    var askLowerCase = window.confirm("Do you want lower case letters?")
    var response = {
      length: length,
      askNumber: askNumber,
      askSymbol: askSymbol,
      askUpperCase: askUpperCase,
      askLowerCase: askLowerCase
    }
    if((length < 8||length > 128))
    window.alert("Choose a number between 8 and 128.");
    else if((!askNumber)&&(!askSymbol)&&(!askUpperCase)&&(!askLowerCase))
    window.alert("Must choose one type.");
    else
    Valid= true;

  } while(!Valid);
  return response;
}

// This joins the inputs to hash together a password.
function generatePassword(){
  var Characters = options();
  var Combo = [];
  var final = "";


  if (Characters.askNumber) {
    for (var i of numbers)
      Combo.push(i);
  }
  if (Characters.askSymbol) {
  for (var i of symbol)
    Combo.push(i);
  }
  if (Characters.askUpperCase) {
    for (var i of UpperCase)
      Combo.push(i);
  }
  if (Characters.askLowerCase) {
    for (var i of LowerCase)
      Combo.push(i);
  }

  
  console.log(Combo);

for (var i=0; i < Characters.length; i++) {
  final += Combo[Math.floor(Math.random() * Combo.length)];

}
console.log(final);

return final;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
