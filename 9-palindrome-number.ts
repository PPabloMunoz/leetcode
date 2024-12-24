function isPalindrome(x: number): boolean {
	const p = x.toString().split("").reverse().join("");

	if (x.toString() === p) return true;
	return false;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
