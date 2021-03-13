export function formatNumber(input) {
	let match = input.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return "(" + match[1] + ") " + match[2] + "-" + match[3];
	}
	return null;
}

export function validateNumber(input) {
	let validateNumbersOnly = input.replace(/\D/g, "").slice(0, 10);
	return validateNumbersOnly;
}
