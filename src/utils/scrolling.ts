import { get } from "svelte/store";
import { websiteSection } from "./stores";

const PAGE_OFFSET: number = window.innerHeight;
const SECTIONS: number[] = [0, 1, 2, 3, 4];
const SCROLL_EL_MISSING_ERR = "Scrolling element not set.";

let scrollingEl: HTMLElement;

function setScrollingElement(el: HTMLElement) {
	scrollingEl = el;
}

function getSections(): number[] {
	return SECTIONS;
}

function updateSection(newSection: number) {
	websiteSection.update((_value) => newSection);
}

function getScrollPos() {
	if (scrollingEl === null) {
		console.error(SCROLL_EL_MISSING_ERR);
		return 0;
	}
	return Math.round(scrollingEl.scrollTop / PAGE_OFFSET);
}

function smoothScroll(section: number): void {
	scrollingEl.scrollTo({
		top: section * PAGE_OFFSET,
		left: 0,
		behavior: "smooth",
	});
	updateSection(section);
}

function scrollToSection(targetSection: number): void {
	if (scrollingEl === null) {
		console.error(SCROLL_EL_MISSING_ERR);
		return;
	}
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
	const realSection = getScrollPos();
	if (realSection !== currentSection) updateSection(realSection);
}

export { setScrollingElement, getSections, scrollToSection, handleScroll };
