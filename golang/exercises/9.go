package main

import "fmt"

func main9() {
	fmt.Printf("121 %v\n", isPalindrome(121))
	fmt.Printf("-121 %v\n", isPalindrome(-121))
	fmt.Printf("10 %v\n", isPalindrome(10))
}

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	original := x
	reverse := 0
	for x != 0 {
		digit := x % 10
		reverse = reverse*10 + digit
		x /= 10
	}
	return original == reverse
}
