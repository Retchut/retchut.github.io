<script lang="ts">
	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import ThemePicker from "./lib/Components/Themes/ThemePicker.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Skillset from "./lib/Sections/Skillset.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { handleScroll } from "./utils/scrollToSection";

	import "./app.css";

	handleScroll(0);
</script>

<main class="w-screen bg-background2">
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

<svelte:window on:scroll={() => handleScroll(null)} />

<style>
</style>
