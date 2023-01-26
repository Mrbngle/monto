export function sortArray<T>(
	arr: T[],
	key: keyof T,
	direction: "asc" | "desc"
): T[] {
	let compareFunction: (a: T, b: T) => number;

	if (direction === "asc") {
		compareFunction = (a: T, b: T) => (a[key] > b[key] ? 1 : -1);
	} else {
		compareFunction = (a: T, b: T) => (a[key] < b[key] ? 1 : -1);
	}

	return [...arr].sort(compareFunction);
}

export function getLocalDate(date: string) {
	return new Date(date).toLocaleDateString(navigator.language, {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
	});
}
