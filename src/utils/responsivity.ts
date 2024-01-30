// gets the current breakpoint. values for each are tailwind's default breakpoint values
function getCurrentBreakpoint() {
	const windowWidth = window.innerWidth;

	if (windowWidth >= 1536) {
		return "2xl";
	} else if (windowWidth >= 1280) {
		return "xl";
	} else if (windowWidth >= 1024) {
		return "lg";
	} else if (windowWidth >= 768) {
		return "md";
	} else if (windowWidth >= 640) {
		return "sm";
	} else {
		return "xs";
	}
}

export { getCurrentBreakpoint };
