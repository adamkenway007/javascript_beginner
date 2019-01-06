var UsedNumber = 10; // Prompt the user to pick a number between 1 & UserNumber
var counter    = 0;
var MaxTries   = 99;

var RandomNumber = Math.floor(Math.random() * UsedNumber) +1;
var Pool = RandomNumber;

function tambah() {
	var Pool = RandomNumber;
	for (var temp = Pool; temp < arguments.length; temp++) {
		 Pool += arguments[temp];
	}
	return Pool
}

function kurang() {
	var Pool = RandomNumber;
	for (var temp = Pool; temp < arguments.length; temp--) {
		 Pool -= arguments[temp];
	}
	console.log();
}

//var coba = tambah(1,2,3,4);
//console.log(coba);

 while(Attempts != RandomNumber ) {
	var  Attempts = prompt("Please pick a number between 1 and" + UsedNumber);
	counter += 1;

	if(counter > MaxTries) {
		alert("You Have No More Tries Left, Press F5 To Play Again");
		break;
	} 
	if (counter != MaxTries) {
		alert("You Wrong, The Correct Answer is between " + tambah + " and " + kurang);
	} 
	if (Attempts == RandomNumber) {
		alert("Congrats You Have The Correct Number!");
		alert("The Random Number Was " + RandomNumber);
		alert("It Took You " + Counter + " Attempts To Get The Correct Number");
	}
 }

console.log("Program Complete");

var s = '';
for(var i = 0; i < 7; i++) {
	for(var j = 0; j < i; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);

var jmlAngkot        = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
   if (noAngkot <= 6 && noAngkot != 5) {
      alert('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' beroperasi dengan baik')
   } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
      alert('Angkot No.  '+ noAngkot + ' sedang lembur')
      console.log('Angkot No.  '+ noAngkot + ' sedang lembur')
   } else {
      alert('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
      console.log('Angkot No.  '+ noAngkot + ' tidak beroperasi dengan baik')
   }
}
// Check too see if number if correct

/* If number is wrong prompt the user again and ask then to try to guess again,
   Repeat Until user gets the number correct OR they have used up all of their attemps
*/

/* If user guessed the correct number, Tell then what the number is, how many attempts
   it took then to get the right number, and thans them for playing
*/

// Program Complete!