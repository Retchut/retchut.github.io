import { get } from "svelte/store";
import { websiteSection } from "./stores";

const PAGE_OFFSET: number = window.innerHeight;
const SCROLL_DELAY: number = 700; // ms
const SECTIONS: number[] = [0, 1];

let onScrollCooldown: boolean = false;

function scrollToSection(num: number) {
	window.scrollTo({
		top: num * PAGE_OFFSET,
		left: 0,
		behavior: "smooth"
	});
	websiteSection.update((value) => num);
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

function handleScroll(targetSection: number | null) {
	const currentSection = get(websiteSection);

	// snap to section if on scroll cooldown
	if (onScrollCooldown) {
		scrollToSection(currentSection);
		return;
	}

	onScrollCooldown = true;

	const nextSection =
		targetSection !== null ? targetSection : currentSection + getSectionOffset(currentSection);

	if (nextSection !== currentSection) {
		// scroll events shouldn't be fired upwards from section 0, or downwards from the last section, but we're still checking just in case
		if (SECTIONS.includes(nextSection)) {
			scrollToSection(nextSection);
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

export { scrollToSection, handleScroll };
