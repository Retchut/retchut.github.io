<script lang="ts">
	import "./app.css";
	import Navbar from "./lib/Navbar.svelte";
	import About from "./lib/About.svelte";
	import Hero from "./lib/Hero.svelte";
	import Projects from "./lib/Projects.svelte";
	import Contacts from "./lib/Contacts.svelte";
</script>

<main class="min-w-screen bg-scheme1background2 overflow-hidden">
	<!-- Inside div to make hero section grow to fill remaining space -->
	<div class="flex flex-col h-screen bg-scheme1background">
		<Navbar />
		<Hero />
	</div>
	<About />
	<Projects />
	<Contacts />
</main>

<style>
</style>
