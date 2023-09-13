<script lang="ts">
	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";

	import { handleScroll } from "./utils/scrollToSection";

	import "./app.css";

	handleScroll(0);
</script>

<main class="w-screen bg-background2">
	<Navbar />
	<Sidebar />
	<div class="z-40 flex flex-col">
		<Hero />
		<About />
		<Projects />
		<Contacts />
	</div>
</main>

<!-- <svelte:window on:scroll={() => handleScroll(null)} /> -->

<style>
</style>
