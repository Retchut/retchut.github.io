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
	import { setScrollingElement, handleScroll, scrollToSection } from "./utils/scrolling";
	import { getCurrentBreakpoint } from "./utils/responsivity";

	import "./app.css";

	// component code
	let mainEl: HTMLElement;

	// this controls whether snapping to sections is enabled or disabled
	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});

	// this controls whether the navbar, sidebar and themepicker are shown
	let hideSideControls: boolean;
	currentBreakpoint.subscribe((value) => {
		hideSideControls = value == "sm" || value == "xs";
	});

	const updateBreakpoint = () => {
		currentBreakpoint.update((_value) => getCurrentBreakpoint());
	};

	onMount(() => {
		setScrollingElement(mainEl);
		scrollToSection(0); // sections are initialized to 0 so this causes no issue
		updateBreakpoint();
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
