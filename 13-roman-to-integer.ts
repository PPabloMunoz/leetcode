enum Roman {
	I = 1,
	V = 5,
	X = 10,
	L = 50,
	C = 100,
	D = 500,
	M = 1000,
}

function romanToInt(s: string): number {
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		const num = Roman[s.charAt(i)];
		const nextNum = Roman[s.charAt(i + 1)];

		if (nextNum > num) {
			sum += nextNum - num;
			i++;
		} else {
			sum += num;
		}
	}

	return sum;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
