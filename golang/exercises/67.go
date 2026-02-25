package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		a string
		b string
	}{
		{"11", "1"},
		{"1010", "1011"},
		{"1", "1"},
		{"0", "0"},
		{"1111", "1111"},
	}

	for i, tc := range testCases {
		result := addBinary(tc.a, tc.b)
		fmt.Println("-----------------------------------")
		fmt.Printf("Test case %d: a=%s, b=%s, result=%s\n", i+1, tc.a, tc.b, result)
		fmt.Println("-----------------------------------")
	}
}

func addBinary(a string, b string) string {
	if a == "0" {
		return b
	}
	if b == "0" {
		return a
	}

	result := make([]byte, 0, max(len(a), len(b))+1)

	carry := 0
	lenA := len(a)
	lenB := len(b)

	for idx := 0; idx < max(lenA, lenB); idx++ {
		sum := carry

		if idx < lenA {
			sum += int(a[lenA-1-idx] - '0')
		}
		if idx < lenB {
			sum += int(b[lenB-1-idx] - '0')
		}

		result = append(result, byte(sum%2+'0'))
		carry = sum / 2
	}

	if carry != 0 {
		result = append(result, byte(carry+'0'))
	}

	for i, j := 0, len(result)-1; i < j; i, j = i+1, j-1 {
		result[i], result[j] = result[j], result[i]
	}

	return string(result)
}
