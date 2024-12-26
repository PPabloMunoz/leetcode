type Shoe = {
	type: "I" | "R";
	size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
	const counts: { [key: number]: { I: number; R: number } } = {};
	const result: number[] = [];

	for (const shoe of shoes) {
		if (!counts[shoe.size]) {
			counts[shoe.size] = { I: 0, R: 0 };
		}
		counts[shoe.size][shoe.type]++;
	}

	for (const size in counts) {
		const { I, R } = counts[size];
		const pairs = Math.min(I, R);
		for (let i = 0; i < pairs; i++) {
			result.push(Number(size));
		}
	}

	console.log(result);
	return result;
}

const shoes = [
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
	{ type: "R", size: 42 },
	{ type: "I", size: 41 },
	{ type: "I", size: 42 },
] as Shoe[];

organizeShoes(shoes);
// [38, 42]

const shoes2 = [
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
	{ type: "I", size: 38 },
	{ type: "I", size: 38 },
	{ type: "R", size: 38 },
] as Shoe[];

organizeShoes(shoes2);
// [38, 38]

const shoes3 = [
	{ type: "I", size: 38 },
	{ type: "R", size: 36 },
	{ type: "R", size: 42 },
	{ type: "I", size: 41 },
	{ type: "I", size: 43 },
] as Shoe[];

organizeShoes(shoes3);
// []

const shoes4 = [
	{ type: "I", size: 39 },
	{ type: "R", size: 39 },
	{ type: "R", size: 39 },
] as Shoe[];

organizeShoes(shoes4);
// [39]
