package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		s string
	}{
		{"Hello World"},
		{"   fly me   to   the moon  "},
		{"luffy is still joyboy"},
		{"a"},
		{""},
	}

	for i, tc := range testCases {
		result := lengthOfLastWord(tc.s)
		fmt.Printf("Test case %d: s=%q, result=%d\n", i+1, tc.s, result)
	}
}

func lengthOfLastWord(s string) int {
	sum := 0
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == ' ' && sum > 0 {
			return sum
		}
		if s[i] != ' ' {
			sum++
		}
	}
	return sum
}
