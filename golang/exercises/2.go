package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main2() {
	num1 := &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9}}}}}}}
	num2 := &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9, Next: &ListNode{Val: 9}}}}

	res := addTwoNumbers(num1, num2)
	fmt.Printf("Result: %d%d%d", res.Next.Next.Val, res.Next.Val, res.Val)
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	carry := 0
	result := &ListNode{}
	temp := result

	for l1 != nil || l2 != nil || carry != 0 {
		sum := carry
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		temp.Val = sum % 10
		carry = sum / 10

		if l1 != nil || l2 != nil || carry != 0 {
			temp.Next = &ListNode{}
			temp = temp.Next
		}
	}
	return result
}
