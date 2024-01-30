import { get } from "svelte/store";
import { websiteSection } from "./stores";

const SCREEN_HEIGHT: number = window.innerHeight;
const SECTIONS: number[] = [0, 1, 2, 3, 4];
const SCROLL_EL_MISSING_ERR = "Scrolling element not set.";

// the offset of each section from the top of the page - required because the project section is not the same height as the screen
const sectionOffsets: number[] = Array(SECTIONS.length).fill(0);
let sectionOffsetsLoaded: boolean = false;

let scrollingEl: HTMLElement;

function setScrollingElement(el: HTMLElement) {
	scrollingEl = el;
}

function setOffsetsLoaded(bool: boolean) {
	sectionOffsetsLoaded = bool;
}

function reloadSectionOffsets() {
	const sections = document.querySelectorAll("section");
	for (let i = 0; i < sections.length; i++) {
		const section = sections[i];
		sectionOffsets[i] = section.offsetTop;
	}
	setOffsetsLoaded(true);
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

	const scrollPosition = scrollingEl.scrollTop;
	for (let i = 0; i < sectionOffsets.length; i++) {
		const sectionStart = sectionOffsets[i];
		const sectionEnd = sectionOffsets[i + 1] ?? sectionStart + SCREEN_HEIGHT; // the last section is the same height as the screen

		if (scrollPosition < sectionStart || scrollPosition > sectionEnd) continue;

		const midpoint = sectionStart + (sectionEnd - sectionStart) / 2;

		return scrollPosition < midpoint ? i : i + 1;
	}

	// this means section offsets were not correctly loaded
	console.error("Couldn't update scroll position");
	setOffsetsLoaded(false);
	return 0;
}

function smoothScroll(section: number): void {
	scrollingEl.scrollTo({
		top: sectionOffsets[section],
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

	reloadSectionOffsets();

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
	if (!sectionOffsetsLoaded) reloadSectionOffsets();
	const currentSection = get(websiteSection);
	const realSection = getScrollPos();
	if (realSection !== currentSection) updateSection(realSection);
}

export {
	setScrollingElement,
	setOffsetsLoaded,
	reloadSectionOffsets,
	getSections,
	scrollToSection,
	handleScroll,
};
