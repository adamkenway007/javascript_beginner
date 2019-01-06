/* Promise */
// Contoh Simple Promise
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

	// cleaning the room

	let isClean = false;

	if(isClean) {
		resolve('Clean');
	} else {
		reject('not Clean');
	}
});

promiseToCleanTheRoom.then(function(fromResolve) {
	console.log('the rom is' + fromResolve);
}).catch(function(fromReject){
	console.log('the rom is' + fromReject);
})

// Contoh Kompleks Promise
//Ex.1
let cleanRoom = function() {
	return new Promise(function(resolve, reject){
		resolve('Clean The Room');
	});
};

let removeGarbage = function(p) {
	return new Promise(function(resolve, reject){
		resolve('remove garbage');
	});
};

let winicecream = function(p) {
	return new Promise(function(resolve, reject){
		resolve('won Icecream');
	});
};

cleanRoom().then(function(){
	return removeGarbage();
}).then(function(){
	return winicecream();
}).then(function(){
	console.log('finished' + result);
})
//Ex.2
let cleanRoom = function() {
	return new Promise(function(resolve, reject){
		resolve('Clean The Room');
	});
};
//-----------------------------------------------------------------------//
// Another Section
/* 
Hello Robin, you have a little error there that you missed.
In the last if statement "if (Attempts == RandomNumber) " the last
document.write has the variable "counter" with a typo.
You are using a lower case "counter" when you define the variable at the top
but when you are calling it in the document.write statement its upper case "Counter".
That is why its not showing up when you run the program. But if you make it a lower case
"counter" it will work just fine and it tells you how many attempts it took for you
to get the correct number. Other then that its a great tutorial.
Thank you for taking the time to make it and post it.﻿
*/

let removeGarbage = function(message) {
	return new Promise(function(resolve, reject){
		resolve( message + 'remove garbage');
	});
};

let winicecream = function(message) {
	return new Promise(function(resolve, reject){
		resolve( message + 'won Icecream');
	});
};

cleanRoom().then(function(result){
	return removeGarbage(result);
}).then(function(result){
	return winicecream(result);
}).then(function(result){
	console.log('finished' + result);
})