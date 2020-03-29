//create secret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");
// alert(guess);

//check if guess is right
if(Number(guess) === secretNumber){
	alert("You got it right!");
}
//otherwise, you got it wrong
// else{
// 	alert("Wrong!");
// }

//otherwise, check if higher
else if(Number(guess) > secretNumber){
	alert("Too high. Guess anagin");
}

//otherwise, check if lower
// else if(Number(guess) < secretNumber){
// 	alert("Too low. Guess anagin");
// }
else{
	alert("Too low. Guess anagin");
}