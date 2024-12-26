type Inventory = Array<{ name: string; quantity: number; category: string }>;
interface TMap {
	[key: string]: {
		[key: string]: number;
	};
}

function organizeInventory(inventory: Inventory): object {
	const map: TMap = {};

	for (let i = 0; i < inventory.length; i++) {
		const category = inventory[i].category;
		const name = inventory[i].name;
		const allActual = map[category];
		let actualQuantity = 0;
		if (allActual && name in allActual) actualQuantity = allActual[name];
		map[category] = {
			...allActual,
			[name]: actualQuantity + inventory[i].quantity,
		};
	}

	console.log(map);
	return map;
}

const inventory = [
	{ name: "doll", quantity: 5, category: "toys" },
	{ name: "car", quantity: 3, category: "toys" },
	{ name: "ball", quantity: 2, category: "sports" },
	{ name: "car", quantity: 2, category: "toys" },
	{ name: "racket", quantity: 4, category: "sports" },
];

organizeInventory(inventory);

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
	{ name: "book", quantity: 10, category: "education" },
	{ name: "book", quantity: 5, category: "education" },
	{ name: "paint", quantity: 3, category: "art" },
];

organizeInventory(inventory2);

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
