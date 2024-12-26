function createXmasTree(height: number, ornament: string): string {
	let result = "";

	for (let i = 0; i < height; i++) {
		const aside = height - 1 - i;
		const toAdd = ornament.repeat(2 * i + 1);
		result += `${"_".repeat(aside)}${toAdd}${"_".repeat(aside)}\n`;
	}

	result += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}\n`;
	result += `${"_".repeat(height - 1)}#${"_".repeat(height - 1)}`;

	return result;
}

const tree = createXmasTree(5, "*");
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
