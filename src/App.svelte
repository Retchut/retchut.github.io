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
	import { setScrollingElement, handleScroll, scrollToSection } from "./utils/scrolling";

	import "./app.css";

	let mainEl: HTMLElement;

	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});

	onMount(() => {
		setScrollingElement(mainEl);
		scrollToSection(0);
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
	<Navbar />
	<Sidebar />
	<ThemePicker />
	<div class="flex flex-col">
		<Hero />
		<About />
		<Skillset />
		<Projects />
		<Contacts />
	</div>
</main>

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
