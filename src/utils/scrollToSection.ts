import { get } from "svelte/store";
import { websiteSection } from "./stores";

const PAGE_OFFSET = window.innerHeight;
const SECTIONS = [0, 1];

function scrollToSection(num: number) {
	window.scrollTo({
		top: num * PAGE_OFFSET,
		left: 0,
		behavior: "smooth"
	});
}

const getSectionOffset = (currentSection: number) => {
	const scrollY = window.scrollY;
	if (scrollY > currentSection * PAGE_OFFSET) {
		return 1;
	} else if (scrollY < currentSection * PAGE_OFFSET) {
		return -1;
	} else {
		return 0;
	}
};

function handleScroll(event: Event) {
	// scroll events aren't fired upwards from section 0, or downwards from the last section
	const currentSection = get(websiteSection);
	const nextSection = currentSection + getSectionOffset(currentSection);
	if (nextSection !== currentSection) {
		if (SECTIONS.includes(nextSection)) {
			scrollToSection(nextSection);
			websiteSection.update((value) => nextSection);
		} else {
			scrollToSection(currentSection);
		}
	}
}

export { scrollToSection, handleScroll };
