<script lang="ts">
	// imports
	import { onMount } from "svelte";

	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Skillset from "./lib/Sections/Skillset.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { currentBreakpoint } from "./utils/stores";
	import {
		setScrollingElement,
		setOffsetsLoaded,
		handleScroll,
		scrollToSection,
	} from "./utils/scrolling";
	import { getCurrentBreakpoint } from "./utils/responsivity";

	import "./app.css";

	// component code
	let mainEl: HTMLElement;

	// defined by the Projects.svelte component
	let preserveGalleryWidth: () => void;

	// TODO: refactor PageSection into a reactive page section, as it is used in About, Projects and Skillset in the exact same way
	// this controls whether the sidebar is shown
	let hideControls: boolean;
	currentBreakpoint.subscribe((value) => {
		hideControls = value == "sm" || value == "xs";
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
	class="bg-background2 w-screen h-screen overflow-y-scroll"
	on:scroll={() => handleScroll()}
>
	<Navbar />
	{#if !hideControls}
		<Sidebar />
	{/if}
	<div class="flex flex-col">
		<Hero />
		<About />
		<Skillset />
		<Projects bind:preserveGalleryWidth />
		<Contacts />
	</div>
</main>

<svelte:window
	on:resize={() => {
		updateBreakpoint();
		preserveGalleryWidth();
	}}
/>
