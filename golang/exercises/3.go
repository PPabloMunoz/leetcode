package main

import (
	"fmt"
	"strings"
)

func main3() {
	// fmt.Printf("result: %d\n", lengthOfLongestSubstring("abcabcbb"))
	// fmt.Printf("result: %d\n", lengthOfLongestSubstring("bbbbb"))
	// fmt.Printf("result: %d\n", lengthOfLongestSubstring("aab"))
	fmt.Printf("result: %d\n", lengthOfLongestSubstring("dvdf"))
}

func lengthOfLongestSubstring(s string) int {
	max := 1
	streak := ""

	// TODO
	for _, c := range s {
		if !strings.ContainsRune(streak, c) {
			fmt.Printf("Add to streak: %c\n", c)
			streak += string(c)
		} else {
			fmt.Printf("Redo streak: %c\n", c)
			streak = string(c)
		}
		if len(streak) > max {
			max = len(streak)
		}
	}

	return max
}
