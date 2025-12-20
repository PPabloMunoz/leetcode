package main

import "fmt"

func main1() {
	target := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Printf("Result 1:")
	printArr(target)

	target = twoSum([]int{3, 2, 4}, 6)
	fmt.Printf("Result 2:")
	printArr(target)
}

func twoSum(nums []int, target int) []int {
	for i1, v1 := range nums {
		for i2, v2 := range nums[i1+1:] {
			if (v1 + v2) == target {
				return []int{i1, i1 + 1 + i2}
			}
		}
	}
	return nil
}

func printArr(arr []int) {
	for _, v := range arr {
		fmt.Printf(" %d", v)
	}
	fmt.Println()
}
