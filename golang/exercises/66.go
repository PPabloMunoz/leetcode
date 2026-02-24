package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		digits []int
	}{
		{[]int{1, 2, 3}},
		{[]int{4, 3, 2, 1}},
		{[]int{9}},
		{[]int{9, 9, 9}},
		{[]int{0}},
	}

	for i, tc := range testCases {
		result := plusOne(tc.digits)
		fmt.Printf("Test case %d: digits=%v, result=%v\n", i+1, tc.digits, result)
	}
}

func plusOne(digits []int) []int {
	result := []int{}
	carry := 1

	for i := len(digits) - 1; i >= 0; i-- {
		newDigit := digits[i] + carry
		if newDigit >= 10 {
			last := newDigit % 10
			result = append(result, last)
			carry = 1
		} else {
			result = append([]int{newDigit}, result...)
			carry = 0
		}
	}

	if carry != 0 {
			result = append([]int{1}, result...)
	}

	return result
}
