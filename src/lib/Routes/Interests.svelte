<script lang="ts">
	// imports
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	import { location } from "svelte-spa-router";

	import Navbar from "../Components/Navigation/Navbar.svelte";
	import Interests from "../Sections/Interests.svelte";

	import { currentBreakpoint } from "../../utils/stores";
	import { setScrollingElement, setOffsetsLoaded, scrollToSection } from "../../utils/scrolling";
	import { getCurrentBreakpoint } from "../../utils/responsivity";

	// component code
	let mainEl: HTMLElement;

	// defined by the Projects.svelte component
	let preserveGalleryWidth: () => void;

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

<main bind:this={mainEl} class="bg-background2 w-screen h-screen overflow-y-scroll">
	<Navbar />
	<div class="flex flex-col">
		<Interests />
	</div>
</main>

<svelte:window
	on:resize={() => {
		updateBreakpoint();
		// preserving gallery changes is only done inside the home route
		if (get(location) === "/") {
			preserveGalleryWidth();
		}
	}}
/>
