package main

import (
	"fmt"
)

func main() {
	testCases := []struct {
		haystack string
		needle   string
	}{
		{"hello", "ll"},
		{"aaaaa", "bba"},
		{"", ""},
		{"abc", "c"},
		{"abc", "d"},
		{"aaa", "aaaa"},
		{"mississippi", "issip"},
	}

	for i, tc := range testCases {
		result := strStr(tc.haystack, tc.needle)
		fmt.Printf("Test case %d: haystack=%q, needle=%q, result=%d\n", i+1, tc.haystack, tc.needle, result)
	}
}

func strStr(haystack string, needle string) int {
	if haystack == "" || needle == "" {
		return -1
	}

	for i := 0; i <= (len(haystack) - len(needle)); i++ {
		subString := haystack[i : i+len(needle)]
		if subString == needle {
			return i
		}
	}

	return -1
}
