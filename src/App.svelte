<script lang="ts">
	import { onMount } from "svelte";

	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import ThemePicker from "./lib/Components/Themes/ThemePicker.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Skillset from "./lib/Sections/Skillset.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { scrollSnap } from "./utils/stores";
	import {
		setScrollingElement,
		setSectionOffsets,
		handleScroll,
		scrollToSection,
	} from "./utils/scrolling";

	import "./app.css";

	let mainEl: HTMLElement;

	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});

	let smallScreen: boolean = true;
	const checkScreenSize = () => {
		// default tailwind breakpoints:
		// sm - 640px
		// md - 768px
		// lg - 1024px
		// xl - 1280px
		// 2x - 1536px
		smallScreen = window.innerWidth < 768;
	};

	onMount(() => {
		setScrollingElement(mainEl);
		scrollToSection(0); // sections are initialized to 0 so this causes no issue
		checkScreenSize();
		// we wait 1 sec after mounting in case the styles have not yet been loaded in, as the user is unlikely to scroll within this timeframe
		setTimeout(() => {
			setSectionOffsets();
		}, 2000);
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
	{#if !smallScreen}
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

<svelte:window on:resize={checkScreenSize} />

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
