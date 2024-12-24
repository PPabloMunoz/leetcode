function convert(s: string, numRows: number): string {
	const midNumbers =
		numRows % 2 === 0 ? numRows / 2 : Math.ceil(numRows / 2 - 1);
	const result: string[][] = [];
	for (let i = 0; i < numRows; i++) {
		result[i] = [];
	}

	console.log(midNumbers);

	return "";
}

console.log(convert("PAYPALISHIRING", 3)); // PAHNAPLSIIGYIR
console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
console.log(convert("A", 1)); // A
