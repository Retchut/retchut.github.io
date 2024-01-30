<script lang="ts">
	// imports
	import { onMount } from "svelte";

	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import ThemePicker from "./lib/Components/Themes/ThemePicker.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Skillset from "./lib/Sections/Skillset.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { scrollSnap, currentBreakpoint } from "./utils/stores";
	import {
		setScrollingElement,
		reloadSectionOffsets,
		setOffsetsLoaded,
		handleScroll,
		scrollToSection,
	} from "./utils/scrolling";
	import { getCurrentBreakpoint } from "./utils/responsivity";

	import "./app.css";

	// component code
	let mainEl: HTMLElement;

	// this controls whether snapping to sections is enabled or disabled
	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
		// changing snapping requires the section offsets to be recalculated, as it disables some extra padding on the bottom of the sections
		reloadSectionOffsets();
	});

	// TODO: refactor PageSection into a reactive page section, as it is used in About, Projects and Skillset in the exact same way
	// TODO: pass list of breakpoints to each section and let them decide whether they should be snapped or not (passing down the list into PageSection, which handles the snapping)
	// this controls whether the navbar, sidebar and themepicker are shown
	let hideSideControls: boolean;
	currentBreakpoint.subscribe((value) => {
		hideSideControls = value == "sm" || value == "xs";
		if (hideSideControls) {
			scrollSnap.set(false);
		}
	});

	const updateBreakpoint = () => {
		currentBreakpoint.update((_value) => getCurrentBreakpoint());
		// changes in the breakpoint require the section offsets to be recalculated in the next scroll, as some sections might grow in size
		setOffsetsLoaded(false);
	};

	onMount(() => {
		setScrollingElement(mainEl);
		updateBreakpoint();
		scrollToSection(0); // sections are initialized to 0 so this causes no issue
	});
</script>

<main
	bind:this={mainEl}
	class="bg-background2 w-screen h-screen overflow-y-scroll snap-mandatory {snapping
		? 'snap-y'
		: 'snap-none'}
		{snapping ? 'hide-scrollbar' : ''}"
	on:scroll={() => handleScroll()}
>
	{#if !hideSideControls}
		<Navbar />
		<Sidebar />
		<ThemePicker />
	{/if}
	<div class="flex flex-col">
		<Hero />
		<About />
		<Skillset />
		<Projects />
		<Contacts />
	</div>
</main>

<svelte:window on:resize={updateBreakpoint} />

<style>
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
