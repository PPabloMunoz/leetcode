class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	let carry = 0;
	const dummy = new ListNode();
	let current = dummy;

	while (l1 || l2) {
		let sum = carry;

		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}

		if (sum > 9) {
			carry = 1;
			sum = sum % 10;
		} else {
			carry = 0;
		}

		current.next = new ListNode(sum);
		current = current.next;
	}

	if (carry) {
		current.next = new ListNode(carry);
	}

	return dummy.next;
}

const list1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2));
