<script lang="ts">
	// imports
	import { onMount } from "svelte";

	import Navbar from "../Components/Navigation/Navbar.svelte";
	import Sidebar from "../Components/Navigation/Sidebar.svelte";
	import Interests from "../Sections/Interests.svelte";

	import { currentBreakpoint } from "../../utils/stores";
	import {
		setScrollingElement,
		setOffsetsLoaded,
		handleScroll,
		scrollToSection,
	} from "../../utils/scrolling";
	import { getCurrentBreakpoint } from "../../utils/responsivity";

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
		<Interests />
	</div>
</main>

<svelte:window
	on:resize={() => {
		updateBreakpoint();
		preserveGalleryWidth();
	}}
/>
