function myAtoi(s: string): number {
	const tempString = s.trim();
	const isNegative = tempString.charAt(0) === "-";

	let result = "";
	for (let i = 0; i < tempString.length; i++) {
		const c = tempString.charAt(i);

		if (Number.isNaN(Number(c)) || c === " ") {
			if ((c === "-" || c === "+") && i === 0) continue;
			break;
		}

		result += c;
	}
	const resNum = isNegative ? -1 * Number(result) : Number(result);
	if (resNum > 2 ** 31 - 1) return 2 ** 31 - 1;
	if (resNum < (-2) ** 31) return (-2) ** 31;

	return resNum;
}

console.log(myAtoi("42")); // 42
console.log(myAtoi(" -042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("-+12")); // -0
