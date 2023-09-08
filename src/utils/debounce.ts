function debounce(func: Function, ms: number) {
	if (ms === undefined) {
		ms = 0;
	}
	let timeoutID: ReturnType<typeof setTimeout>;
	return function (this: any, ...args: any[]) {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => func.apply(this, args), ms);
	};
}

export default debounce;
