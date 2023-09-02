<script lang="ts">
	import "./app.css";
	import Navbar from "./lib/Navbar.svelte";
	import About from "./lib/About.svelte";
	import Hero from "./lib/Hero.svelte";
	import Projects from "./lib/Projects.svelte";
	import Contacts from "./lib/Contacts.svelte";
</script>

<main class="w-screen bg-scheme1background2">
	<Navbar />
	<div class="z-40 flex flex-col">
		<Hero />
		<About />
		<Projects />
		<Contacts />
	</div>
</main>

<style>
</style>
