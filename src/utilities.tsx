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

export function filterArray<T>(arr: T[], field: keyof T, query: string): T[] {
    return arr.filter((item: T) => {

		const value = item[field] as string;
		return value.trim().toLowerCase().includes(query.toLowerCase());
	});
}

export function getLocalDate(date: string) {
	return new Date(date).toLocaleDateString(navigator.language, {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
	});
}


