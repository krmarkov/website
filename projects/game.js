let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let sqX = 50;
let heroSqX = 1;
let heroSqY = 1;
context.fillStyle = "orange";

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
drawEmptyGrid();
context.fillStyle = "black";
context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);

canvas.onclick = function(e)
{
	let x = e.clientX;
	let y = e.clientY;
	heroSqX = Math.floor(x / sqX);
	heroSqY = Math.floor(y / sqX);
	drawEmptyGrid();
	context.fillStyle = "black";
	context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
}

document.onkeydown = function(e)
{
	switch (e.key)
	{
		case "w": heroSqY--; break;
	}
	if (e.key === "d") heroSqX++;
	else if (e.key === "a") heroSqX--;
	else if (e.key === "w") 
	else if (e.key === "s") heroSqY++;
	drawEmptyGrid();
	context.fillStyle = "black";
	context.fillRect(sqX * heroSqX, sqX * heroSqY, 50, 50);
	console.log(e);
}


