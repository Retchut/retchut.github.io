import { get } from "svelte/store";
import { websiteSection } from "./stores";

const PAGE_OFFSET: number = window.innerHeight;
const SECTIONS: number[] = [0, 1, 2, 3, 4];

function getSections(): number[] {
	return SECTIONS;
}

function updateSection(newSection: number) {
	websiteSection.update((_value) => newSection);
}

function getWindowSection() {
	const posInDocument: number = window.scrollY || window.pageYOffset;
	return Math.round(posInDocument / PAGE_OFFSET);
}

function smoothScroll(section: number): void {
	window.scrollTo({
		top: section * PAGE_OFFSET,
		left: 0,
		behavior: "smooth",
	});
	updateSection(section);
}

function scrollToSection(targetSection: number): void {
	const currentSection = get(websiteSection);

	if (targetSection !== currentSection) {
		// scroll events shouldn't be fired upwards from section 0, or downwards from the last section, but we're still checking just in case
		if (SECTIONS.includes(targetSection)) {
			smoothScroll(targetSection);
		} else {
			smoothScroll(currentSection);
		}
	}
}

function handleScroll() {
	const currentSection = get(websiteSection);
	const realSection = getWindowSection();
	if (realSection !== currentSection) updateSection(realSection);
}

export { getSections, scrollToSection, handleScroll };
