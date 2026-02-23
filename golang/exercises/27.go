package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		nums []int
		val  int
	}{
		{[]int{3, 2, 2, 3}, 3},
		{[]int{0, 1, 2, 2, 2, 3, 0, 4, 2}, 2},
		{[]int{}, 1},
		{[]int{1}, 1},
		{[]int{1}, 2},
	}

	for i, tc := range testCases {
		nums := make([]int, len(tc.nums))
		copy(nums, tc.nums)
		newLen := removeElement(nums, tc.val)
		fmt.Printf("Test case %d: nums=%v, val=%d, newLen=%d nums=%d\n", i+1, tc.nums, tc.val, newLen, nums)
	}
}

func removeElement(nums []int, val int) int {
	if len(nums) < 1 {
		return 0
	}

	idx := 0
	for i := range nums {
		if nums[i] != val {
			nums[idx] = nums[i]
			idx++
		}
	}

	return idx
}
