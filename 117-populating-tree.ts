/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class _Node {
	val: number;
	left: _Node | null;
	right: _Node | null;
	next: _Node | null;

	constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
		this.next = next === undefined ? null : next;
	}
}

function connect(root: _Node | null): _Node | null {
	return null;
}

console.log(connect(null)); // null
console.log(connect(new _Node(1))); // 1
console.log(connect(new _Node(1, new _Node(2), new _Node(3)))); // 1
console.log(
	connect(
		new _Node(
			1,
			new _Node(2, new _Node(4), new _Node(5)),
			new _Node(3, new _Node(6), new _Node(7)),
		),
	),
); // 1
