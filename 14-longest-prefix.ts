function longestCommonPrefix(strs: string[]): string {
	let commonPrefix: string = strs[0];

	for (let i = 1; i < strs.length; i++) {
		let actualWord = strs[i];
		if (actualWord.length < commonPrefix.length)
			actualWord = actualWord += "_".repeat(
				commonPrefix.length - actualWord.length,
			);
		for (let j = 0; j < actualWord.length; j++) {
			const actualChar = actualWord.charAt(j);

			if (actualChar !== commonPrefix.charAt(j)) {
				commonPrefix = commonPrefix.substring(0, j);
				break;
			}
		}
	}

	return commonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
