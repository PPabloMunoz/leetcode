package main

import "fmt"

func main12() {
	// fmt.Printf("III: %d\n", romanToInt("III"))
	// fmt.Printf("LVIII: %d\n", romanToInt("LVIII"))
	fmt.Printf("MCMXCIV: %d\n", romanToInt("MCMXCIV"))
}

func romanToInt(s string) int {
	nums := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	sum := 0
	for i := 0; i < len(s); i++ {
		current := nums[s[i]]
		next := 0
		if i+1 < len(s) {
			next = nums[s[i+1]]
		}

		fmt.Printf("current %d, next %d ", current, next)

		if current < next {
			fmt.Printf("result: %d\n", next-current)
			sum += next - current
			i++
		} else {
			fmt.Printf("result: %d\n", current)
			sum += current
		}
	}

	return sum

}
