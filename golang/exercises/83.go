package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	result := head
	for {
		if result == nil || result.Next == nil {
			break
		}
		if result.Val == result.Next.Val {
			result.Next = result.Next.Next
			continue
		}
		result = result.Next
	}
	return head
}
