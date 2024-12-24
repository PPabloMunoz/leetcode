function longestPalindrome(s: string): string {
	if (s.length === 0) return s;
	if (s.length === 1) return s;
	if (s.length === 2) return s.substring(0, 1);
	let longest = "";

	for (let i = 0; i < s.length; i++) {
		for (let j = s.length - 1; j > i; j--) {
			const word = s.substring(i, j);
			if (
				word === word.split("").reverse().join("") &&
				word.length > longest.length
			) {
				longest = word;
				break;
			}
		}
	}

	return longest;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
