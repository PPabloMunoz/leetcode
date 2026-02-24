package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		nums   []int
		target int
	}{
		{[]int{1, 3, 5, 6}, 5},
		{[]int{1, 3, 5, 6}, 2},
		{[]int{1, 3, 5, 6}, 7},
		{[]int{1, 3, 5, 6}, 0},
		{[]int{1}, 1},
	}

	for i, tc := range testCases {
		result := searchInsert(tc.nums, tc.target)
		fmt.Printf("Test case %d: nums=%v, target=%d, result=%d\n", i+1, tc.nums, tc.target, result)
	}
}

func searchInsert(nums []int, target int) int {
	for i, v := range nums {
		if v == target || v > target {
			return i
		}
	}
	return len(nums)
}
