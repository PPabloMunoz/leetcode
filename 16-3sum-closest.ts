function threeSumClosest(nums: number[], target: number): number {
	nums.sort((a, b) => a - b);
	let closest = Number.POSITIVE_INFINITY;

	for (let i = 0; i < nums.length - 2; i++) {
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === target) {
				return sum;
			}

			if (Math.abs(target - sum) < Math.abs(target - closest)) {
				closest = sum;
			}

			if (sum < target) {
				left++;
			} else {
				right--;
			}
		}
	}

	return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([1, 1, 1, 0], 100)); // 3
