package main

import (
	"fmt"
)

func main() {
	fmt.Println(isValid("()"))
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid("(]"))
	fmt.Println(isValid("([])"))
	fmt.Println(isValid("([)]"))
	fmt.Println(isValid("){"))
}

func isValid(s string) bool {
	chars := []rune{}

	if len(s) < 2 {
		return false
	}

	for _, c := range s {
		switch c {
		case '(', '{', '[':
			chars = append(chars, c)
		case ')':
			if len(chars) < 1 {
				return false
			}
			last := chars[len(chars)-1]
			if last != '(' {
				return false
			}
			chars = chars[:len(chars)-1]
		case '}':
			if len(chars) < 1 {
				return false
			}
			last := chars[len(chars)-1]
			if last != '{' {
				return false
			}
			chars = chars[:len(chars)-1]
		case ']':
			if len(chars) < 1 {
				return false
			}
			last := chars[len(chars)-1]
			if last != '[' {
				return false
			}
			chars = chars[:len(chars)-1]
		}
	}

	return len(chars) <= 0
}
