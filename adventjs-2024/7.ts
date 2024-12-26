function fixPackages(packages: string): string {
	let result = packages;
	while (result.includes("(")) {
		// Find the innermost parentheses and reverse their contents
		result = result.replace(/\(([^()]+)\)/g, (_, inner) =>
			inner.split("").reverse().join(""),
		);
	}
	console.log(result);
	return result;
}

fixPackages("a(cb)de");
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages("a(bc(def)g)h");
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages("abc(def(gh)i)jk");
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages("a(b(c))e");
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
