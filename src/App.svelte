<script lang="ts">
	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import ThemePicker from "./lib/Components/Themes/ThemePicker.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Skillset from "./lib/Sections/Skillset.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { handleScroll, scrollToSection } from "./utils/scrolling";

	import { scrollSnap } from "./utils/stores";

	import "./app.css";

	scrollToSection(0);

	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});
</script>

<main
	class="bg-background2 w-screen h-screen overflow-y-scroll snap-mandatory {snapping
		? 'snap-y'
		: 'snap-none'}"
>
	<Navbar />
	<Sidebar />
	<ThemePicker />
	<div class="z-40 flex flex-col">
		<Hero />
		<About />
		<Skillset />
		<Projects />
		<Contacts />
	</div>
</main>

<svelte:window on:scroll={() => handleScroll()} />

<style>
</style>
