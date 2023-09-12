/* eslint-disable @typescript-eslint/no-explicit-any */
function debounce<T extends any[]>(func: (...args: T) => void, ms: number) {
	if (ms === undefined) {
		ms = 0;
	}
	let timeoutID: ReturnType<typeof setTimeout>;
	return function (...args: T) {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => func.apply(this, args), ms);
	};
}

export default debounce;
