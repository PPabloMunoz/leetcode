function intToRoman(num: number): string {
	const romanMap = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	] as const;

	let result = "";

	for (const [value, symbol] of romanMap) {
		const count = Math.floor(num / value); // Determine how many times the symbol fits
		if (count > 0) {
			result += symbol.repeat(count); // Append the symbol `count` times
			num %= value; // Reduce the number by the total value added
		}
	}

	return result;
}

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(3999));
