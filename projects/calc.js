
function add() {
	let a = document.getElementById('inputA').valueAsNumber;
	let b = document.getElementById('inputB').valueAsNumber;
	document.getElementById('answer').innerHTML = a + b;
}

function subtract() {
	let a = document.getElementById('inputA').valueAsNumber;
	let b = document.getElementById('inputB').valueAsNumber;
	document.getElementById('answer').innerHTML = a - b;
}

function multiply() {
	let a = document.getElementById('inputA').valueAsNumber;
	let b = document.getElementById('inputB').valueAsNumber;
	document.getElementById('answer').innerHTML = a * b;
}

function devide() {
	let a = document.getElementById('inputA').valueAsNumber;
	let b = document.getElementById('inputB').valueAsNumber;
	document.getElementById('answer').innerHTML = a / b;
}
	document.getElementById('buttonAdd').onclick = add;
	document.getElementById('buttonSubtract').onclick = subtract;
	document.getElementById('buttonMultiply').onclick = multiply;
	document.getElementById('buttonDevide').onclick = devide;

	