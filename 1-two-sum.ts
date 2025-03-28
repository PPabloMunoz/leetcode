function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (map.has(complement)) {
			return [map.get(complement) ?? -1, i];
		}

		map.set(nums[i], i);
	}

	return [-1, -1];
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target));
