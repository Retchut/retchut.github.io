import { get } from "svelte/store";
import { websiteSection } from "./stores";

const PAGE_OFFSET: number = window.innerHeight;
const SCROLL_DELAY: number = 700; // ms
const SECTIONS: number[] = [0, 1, 2, 3, 4];

let onScrollCooldown: boolean = false;

function getSections(): number[] {
	return SECTIONS;
}

function scrollToSection(num: number): void {
	window.scrollTo({
		top: num * PAGE_OFFSET,
		left: 0,
		behavior: "smooth",
	});
	websiteSection.update((_value) => num);
}

function handleScroll(targetSection: number): void {
	const currentSection = get(websiteSection);

	// snap to section if on scroll cooldown
	if (onScrollCooldown) {
		scrollToSection(currentSection);
		return;
	}

	onScrollCooldown = true;

	if (targetSection !== currentSection) {
		// scroll events shouldn't be fired upwards from section 0, or downwards from the last section, but we're still checking just in case
		if (SECTIONS.includes(targetSection)) {
			scrollToSection(targetSection);
		} else {
			scrollToSection(currentSection);
		}

		// reset scrolling flag after delay if we scroll
		setTimeout(function () {
			onScrollCooldown = false;
		}, SCROLL_DELAY);
	} else {
		// no scrolling was made, so we just clear the flag
		onScrollCooldown = false;
	}
}

export { getSections, scrollToSection, handleScroll };
