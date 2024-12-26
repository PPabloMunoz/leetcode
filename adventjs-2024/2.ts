function createFrame(names: string[]): string {
	let baseLength = 0;
	for (let i = 0; i < names.length; i++) {
		if (names[i].length > baseLength) {
			baseLength = names[i].length;
		}
	}
	let result = "";
	let base = "";
	for (let i = 0; i < baseLength + 4; i++) {
		base += "*";
	}
	result += `${base}\n`;

	for (let i = 0; i < names.length; i++) {
		result += `* ${names[i].padEnd(baseLength, " ")} *\n`;
	}
	result += `${base}`;

	console.log(result);
	return result;
}

createFrame(["midu", "madeval", "educalvolpz"]);

// Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(["midu"]);

// Expected result:
// ********
// * midu *
// ********

createFrame(["a", "bb", "ccc"]);

// Expected result:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(["a", "bb", "ccc", "dddd"]);
