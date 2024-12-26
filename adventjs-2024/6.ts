function inBox(box: string[]): boolean {
	for (const lineNum in box) {
		const line = box[lineNum];
		const index = line.indexOf("*");

		if (index >= 0) {
			if (Number(lineNum) === 0 || Number(lineNum) === box.length - 1)
				return false;
			const first = line.indexOf("#");
			const editLine = line.slice(0, first) + line.slice(first + 1);
			const second = editLine.indexOf("#") + first + 1;
			if (first < index && index < second) {
				return true;
			}
		}
	}

	return false;
}

inBox(["###", "#*#", "###"]); // ➞ true

inBox(["####", "#* #", "#  #", "####"]); // ➞ true

inBox(["#####", "#   #", "#  #*", "#####"]); // ➞ false

inBox(["#####", "#   #", "#   #", "#   #", "#####"]); // ➞ false
