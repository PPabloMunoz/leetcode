function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
	const result: number[] = [];
	let count1 = 0;
	let count2 = 0;

	while (result.length < nums1.length + nums2.length) {
		if (nums1[count1] < nums2[count2] || count2 === nums2.length) {
			result.push(nums1[count1]);
			count1++;
		} else {
			result.push(nums2[count2]);
			count2++;
		}
	}

	const even = result.length % 2 === 0; // Par
	const mid = Math.floor(result.length / 2);

	if (even) {
		return (result[mid - 1] + result[mid]) / 2;
	}

	return result[mid];
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
