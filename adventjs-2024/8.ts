function drawRace(indices: number[], length: number): string {
	let result = "";

	for (let i = 1; i < indices.length + 1; i++) {
		const index = indices[i - 1];
		const pos = index < 0 ? length + index : index;
		const baseLine = "~".repeat(length).split("");

		if (index !== 0) {
			baseLine[pos] = "r";
		}
		result += `${" ".repeat(indices.length - i)}${baseLine.join("")} /${i}`;
		if (indices.length !== i) result += "\n";
	}

	console.log(result);
	return result;
}

drawRace([0, 5, -3], 10);
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8);
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12);
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3
*/
