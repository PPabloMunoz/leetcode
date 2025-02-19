function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b); // sort the input array
	const result: number[][] = []; // initialize the result array

	for (let i = 0; i < nums.length - 2; i++) {
		// iterate through the array
		if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

		let j = i + 1; // initialize the left pointer
		let k = nums.length - 1; // initialize the right pointer

		while (j < k) {
			const sum = nums[i] + nums[j] + nums[k];

			if (sum === 0) {
				// check if we found a triplet that sums to zero
				result.push([nums[i], nums[j], nums[k]]);
				while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
				while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
				j++; // move the left pointer to the right
				k--; // move the right pointer to the left
			} else if (sum < 0) {
				// if the sum is less than zero, move the left pointer to the right
				j++;
			} else {
				// if the sum is greater than zero, move the right pointer to the left
				k--;
			}
		}
	}

	return result; // return the result array
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0,0,0]]
