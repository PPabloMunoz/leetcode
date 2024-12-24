function removeDuplicates(nums: number[]): number {
	if (nums.length <= 2) return nums.length;

	let slow = 2;

	for (let fast = 2; fast < nums.length; fast++) {
		if (nums[slow - 2] !== nums[fast]) {
			nums[slow] = nums[fast];
			slow++;
		}
	}

	return slow;
}

const arr = [1, 1, 2];
console.log(removeDuplicates(arr), arr); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
