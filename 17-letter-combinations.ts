function letterCombinations(digits: string): string[] {
	if (digits.length === 0) return [];
	const combinations = [
		"abc",
		"def",
		"ghi",
		"jkl",
		"mno",
		"pqrs",
		"tuv",
		"wxyz",
	];
	const result: string[] = [];

	for (let i = 0; i < digits.length; i++) {
		const firstComb = combinations[Number(digits[i]) - 2];

		for (let j = i + 1; j < digits.length; j++) {
			const secondComb = combinations[Number(digits[j]) - 2];
			const longerCombination =
				firstComb.length >= secondComb.length ? firstComb : secondComb;
			const sorterCombination =
				firstComb.length >= secondComb.length ? secondComb : firstComb;

			for (let k = 0; k < longerCombination.length; k++) {
				for (let l = k; l < longerCombination.length; l++) {
					result.push(
						`${longerCombination.charAt(k)}${sorterCombination.charAt(l)}`,
					);
				}
			}
		}
	}

	return result;
}

console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
