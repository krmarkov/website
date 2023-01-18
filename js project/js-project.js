let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let color = "black";
let sqX = 50;
let heroSqX = 1;
let heroSqY = 1;

let btnRed = document.getElementById("btnRed");
let btnBlue = document.getElementById("btnBlue");
let btnGreen = document.getElementById("btnGreen");


let ta = document.getElementById("textArea");
function drawEmptyGrid() 
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
}

function drawHero()
{
	if (heroSqX < 0 || heroSqX > 11) 
	{
		console.log("NE");
		context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
	}
	else context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
}

drawEmptyGrid();
context.fillStyle = "black";
drawHero();

btnRed.onclick = function()
{
	color = "red";
	drawEmptyGrid();
	context.fillStyle = color;
	drawHero()
	ta.innerHTML = "You chose the color RED";
}

btnBlue.onclick = function()
{
	color = "blue";
	drawEmptyGrid();
	context.fillStyle = color;
	drawHero()
	ta.innerHTML = "You chose the color BLUE";
}

btnGreen.onclick = function()
{
	color = "green";
	drawEmptyGrid();
	context.fillStyle = color;
	drawHero()
	ta.innerHTML = "You chose the color GREEN";
}

canvas.onclick = function(e)
{
	let x = e.clientX;
	let y = e.clientY;
	heroSqX = Math.floor(x / sqX);
	heroSqY = Math.floor(y / sqX);
	drawEmptyGrid();
	context.fillStyle = color;
	drawHero()
}

document.onkeydown = function(e)
{
	switch (e.key)
	{
		case "w": if(heroSqY - 1 < 0) ta.innerHTML = "Cannot go out of the map!"; else heroSqY--; break;
		case "d": if(heroSqX + 1 > 11) ta.innerHTML = "Cannot go out of the map!"; else heroSqX++; break;
		case "s": if(heroSqY + 1 > 11) ta.innerHTML = "Cannot go out of the map!"; else heroSqY++; break;
		case "a": if(heroSqX - 1 < 0) ta.innerHTML = "Cannot go out of the map!"; else heroSqX--; break;
	}
	drawEmptyGrid();
	context.fillStyle = color;
	drawHero()
	console.log(e);
}

