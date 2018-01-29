// cookie scripts
// declare all global variables
var recipient
var day
var message
var mlength //count number of characters in message

// this function saves all the necessary variables
function save() {	
	// read data from the form
	recipient = document.getElementById('recipient').value
	day = document.getElementById('day').value
	message = document.getElementById('message').value
	mlength = message.length
		
	//save the values into a cookie
	saveVar('day')
	saveVar('recipient')
	saveVar('message')
	saveVar('mlength')

}