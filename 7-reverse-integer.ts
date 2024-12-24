function reverse(x: number): number {
	if (x === 0) return x;
	const isNegative = x < 0;
	const num = isNegative ? x * -1 : x;
	const result = Number(num.toString().split("").reverse().join(""));
	if (result > 2 ** 31 - 1) return 0;
	return isNegative ? -1 * result : result;
}

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(1534236469)); // 0
