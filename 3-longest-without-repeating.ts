function lengthOfLongestSubstring(s: string): number {
	let longest = 0;
	for (let i = 0; i < s.length; i++) {
		let word = s.charAt(i);

		for (let j = i + 1; j < s.length; j++) {
			if (!word.includes(s.charAt(j))) {
				word += s.charAt(j);
			} else {
				break;
			}
		}

		if (word.length > longest) longest = word.length;
	}

	return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
