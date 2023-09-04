<script lang="ts">
	import "./app.css";
	import Navbar from "./lib/Components/Navigation/Navbar.svelte";
	import Sidebar from "./lib/Components/Navigation/Sidebar.svelte";
	import About from "./lib/Sections/About.svelte";
	import Hero from "./lib/Sections/Hero.svelte";
	import Projects from "./lib/Sections/Projects.svelte";
	import Contacts from "./lib/Sections/Contacts.svelte";
</script>

<main class="w-screen bg-scheme1background2">
	<Navbar />
	<Sidebar />
	<div class="z-40 flex flex-col">
		<Hero />
		<About />
		<Projects />
		<Contacts />
	</div>
</main>

<style>
</style>
