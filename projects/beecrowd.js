document.getElementById("run").onclick = function() {
	let input = document.getElementById("input").value;
	var lines = input.split('\n');
	for (let i = 0; i < lines.length; i++) {
		let num = lines[i].split(" ");
		let x = Number(num[0]);
		let y = Number(num[1]);
		if (x == 0 || y == 0) break;
		if (x > 0 && y > 0) console.log("primeiro");
		else if (x < 0 && y > 0) console.log("segundo");
		else if (x < 0 && y < 0) console.log("terceiro");
		else console.log("quarto")
	}
}

