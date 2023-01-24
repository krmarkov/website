let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let text = document.getElementById("text");

let heroSqX = -1;
let heroSqY = -1;

let color = "black";
let sqX = 50;

let btnRed = document.getElementById("btnRed");
let btnBlue = document.getElementById("btnBlue");
let btnGreen = document.getElementById("btnGreen");
let bntYellow = document.getElementById("btnYellow");

document.getElementById("run").onclick = function() 
{
	let input = document.getElementById("input").value;
	let lines = input.split(' ');
	if (Number(lines[0]) < 0 || Number(lines[0]) > 10 || Number(lines[1]) < 0 || Number(lines[1]) > 10) 
	{
		text.innerHTML = "Cannot set coordinates outside the map!";
	}
	else 
	{
		heroSqX = Number(lines[0]);
		heroSqY = Number(lines[1]);
	}
	drawHero();
}

function drawHero()
{
	if (heroSqX < 0 || heroSqX > 11) context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
	else context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
	canvas.focus();
}

function drawGrid() 
{
	for (let i = 0; i < canvas.height / sqX; i++)
	{
		for (let j = 0; j < canvas.width / sqX; j++)
		{
			context.fillStyle = "white";
			context.fillRect(sqX * j, sqX * i, 50, 50);
	 		context.strokeRect(j * sqX, i * sqX, sqX, sqX);
		}
	}
	canvas.focus();
}

drawGrid();
context.fillStyle = color;
drawHero();

btnRed.onclick = function()
{
	color = "red";
	drawGrid();
	context.fillStyle = color;
	text.innerHTML = "You chose the color RED";
	drawHero();
}

btnBlue.onclick = function()
{
	color = "blue";
	drawGrid();
	context.fillStyle = color;
	text.innerHTML = "You chose the color BLUE";
	drawHero();
}

btnYellow.onclick = function()
{
	color = "yellow";
	drawGrid();
	context.fillStyle = color;
	text.innerHTML = "You chose the color YELLOW";
	drawHero();	
}

btnGreen.onclick = function()
{
	color = "green";
	drawGrid();
	context.fillStyle = color;
	text.innerHTML = "You chose the color GREEN";
	drawHero();	
}

canvas.onclick = function(e)
{
	let x = e.clientX;
	let y = e.clientY;
	heroSqX = Math.floor(x / sqX);
	heroSqY = Math.floor(y / sqX);
	drawGrid();
	context.fillStyle = color;
	drawHero();
}

document.onkeydown = function(e)
{
	switch (e.key)
	{
		case "w": 
			if(heroSqY - 1 < 0) text.innerHTML = "Cannot go out of the map!"; 
			else heroSqY--; 
			break;
		case "d": 
			if(heroSqX + 1 > 11) text.innerHTML = "Cannot go out of the map!"; 
			else heroSqX++; 
			break;
		case "s": 
			if(heroSqY + 1 > 11) text.innerHTML = "Cannot go out of the map!"; 
			else heroSqY++; 
			break;
		case "a": 
			if(heroSqX - 1 < 0) text.innerHTML = "Cannot go out of the map!"; 
			else heroSqX--; 
			break;
	}
	drawGrid();
	context.fillStyle = color;
	drawHero();
}
