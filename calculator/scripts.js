let displayValue = document.querySelector('#displayValue');
const digitButtons = Array.from(document.querySelectorAll('.digitButton'));
const functionButtons = Array.from(document.querySelectorAll('.functionButton'));
const operationButtons = Array.from(document.querySelectorAll('.operatorButton'));
const decimalButton = document.querySelector('.decimalButton');

function changeDisplay(displayText) { 
	displayValue.textContent = displayText; }

let operators = ['-', '+', '*', '/'];

function checkForEquation() { 
	for (i = 0; i < operators.length; i++) { 
		if (displayValue.innerHTML.slice(-1) == operators[i]) { return true; } } 
}	

let a = undefined;
let decimalPresent = false;
let negativeActive = false;



/* Digit buttons. */

for (i = 0; i < digitButtons.length; i++) {
	digitButtons[i].addEventListener('click', () => {
		if(displayValue.textContent.length < 13) {
			changeDisplay(displayValue.textContent += event.target.value);} });
		}


/* Calculator function buttons. */

for (i = 0; i < functionButtons.length; i++) {
	functionButtons[i].addEventListener('click', () => { 

		if (event.target.value == 'clr') { 
			a = undefined;
			b = undefined;
			decimalPresent = false;
			negativeActive = false;
			changeDisplay(''); } 

		if (event.target.value == 'posneg') {
			if (negativeActive == false && a == undefined) {
				negativeActive = true;
				changeDisplay('-' + displayValue.textContent); 
				return; }

			if (negativeActive == true && a == undefined) {
				negativeActive = false;
				changeDisplay(displayValue.textContent.substring(1));
				return; }

			if (negativeActive == false && a !== undefined) {
				negativeActive = true;
				changeDisplay(displayValue.textContent.slice(0, a.length+1) + '-' + displayValue.textContent.slice(a.length+1));
				return;
			}

			if (negativeActive == true && a !== undefined) {
				negativeActive = false;
				changeDisplay(displayValue.textContent.slice(0, a.length+1) + displayValue.textContent.slice(a.length+2));
				return;
			}	

		} 

		if (event.target.value == 'percentage') {
			if (a == undefined) { 
				a = Number(displayValue.textContent) / 100;
				changeDisplay(a); } else {

				a = eval(displayValue.textContent) / 100;
				changeDisplay(a); }
		}
	});	
}

/* Operation buttons. */

for (i = 0; i < operationButtons.length; i++) {
	operationButtons[i].addEventListener('click', () => { 

		/* Addition. */
		if (event.target.value == 'add') {

			negativeActive = false;

			if (a == undefined) {
				a = displayValue.textContent;
				changeDisplay(a + '+');
				decimalPresent = false;
				negativeActive = false; 
				return a; }	

			if (a !== undefined) {
				if (checkForEquation() == true) { 
					changeDisplay(a + '+'); }
				else { 
					a = eval(displayValue.textContent);
					changeDisplay(a + '+');
					decimalPresent = false;
					negativeActive = false;
					return a; } }		
		}

		/* Subtraction. */
		if (event.target.value == 'subtract') {

			negativeActive = false;

			if (a == undefined) {
				a = displayValue.textContent + '-';
				changeDisplay(a); 
				return a; }

			if (a !== undefined) {
				if (checkForEquation() == true) { 
					changeDisplay(a + '-'); }
				else {						
					a = eval(displayValue.textContent);
					changeDisplay(a + '-');
					decimalPresent = false;
					negativeActive = false;
					return a; } }		
		}

		/* Multiplication. */
		if (event.target.value == 'multiply') {

			negativeActive = false;

			if (a == undefined) {
				a = displayValue.textContent + '*';
				changeDisplay(a); 
				return a; }

			if (a !== undefined) {	
				if (checkForEquation() == true) { 
					changeDisplay(a + '*'); }
				else {				
					a = eval(displayValue.textContent);
					changeDisplay(a + '*');
					decimalPresent = false;
					negativeActive = false;
					return a; } }		
		}

		/* Division. */
		if (event.target.value == 'divide') {

			negativeActive = false;

			if (a == undefined) {
				a = displayValue.textContent + '/';
				changeDisplay(a); 
				return a; }

			if (a !== undefined) {
				if (checkForEquation() == true) { 
					changeDisplay(a + '/'); }
				else {				
					a = eval(displayValue.textContent);
					changeDisplay(a + '/');
					decimalPresent = false;
					negativeActive = false;
					return a; } }			
		}

		/* Equals. */
		if (event.target.value == 'equals') {

			negativeActive = false;

			if (a !== undefined) {
				a = eval(displayValue.textContent);
				negativeActive = false;
				decimalPresent = false;
				changeDisplay(a);
				return a; }		


		}

	});
}

/* Decimal button. */
decimalButton.addEventListener('click', () => {
	if(decimalPresent == false) { 
		changeDisplay(displayValue.textContent + '.');
		decimalPresent = true; 
	}
});

