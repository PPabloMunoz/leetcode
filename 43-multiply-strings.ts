function multiply(num1: string, num2: string): string {
	const longer = num1.length > num2.length ? num1 : num2;
	const shorter = num1.length > num2.length ? num2 : num1;

	const products: number[] = new Array(longer.length + shorter.length).fill(0);

	for (let i = shorter.length - 1; i >= 0; i--) {
		for (let j = longer.length - 1; j >= 0; j--) {
			const product = +shorter[i] * +longer[j];
			const sum = product + products[i + j + 1];

			products[i + j] += Math.floor(sum / 10);
			products[i + j + 1] = sum % 10;
		}
	}

	return products.join("").replace(/^0+/, "") || "0";
}

console.log(multiply("2", "3")); // 6
// console.log(multiply("123", "456")); // 56088
