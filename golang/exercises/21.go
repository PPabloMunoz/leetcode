package main

import (
	"fmt"
)

func main() {
	l1 := &ListNode{Val: -9, Next: &ListNode{Val: 3}}
	l2 := &ListNode{Val: 5, Next: &ListNode{Val: 7}}

	result := mergeTwoLists(l1, l2)

	for result != nil {
		fmt.Printf("%d ", result.Val)
		result = result.Next
	}
	fmt.Println()
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	result := &ListNode{}
	temp := result

	if list1 == nil {
		return list2
	} else if list2 == nil {
		return list1
	} else {
		for {
			if list1 == nil && list2 != nil {
				temp.Val = list2.Val
				list2 = list2.Next
			} else if list1 != nil && list2 == nil {
				temp.Val = list1.Val
				list1 = list1.Next
			} else if list1 == nil && list2 == nil {
				break
			} else {
				fmt.Printf("Testing %d vs %d\n", list1.Val, list2.Val)
				if list1.Val <= list2.Val {
					temp.Val = list1.Val
					list1 = list1.Next
				} else {
					temp.Val = list2.Val
					list2 = list2.Next
				}
			}

			if list1 != nil || list2 != nil {
				temp.Next = &ListNode{}
			}
			temp = temp.Next
		}
		return result
	}
}
