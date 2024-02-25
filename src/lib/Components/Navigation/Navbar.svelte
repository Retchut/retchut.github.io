<!--
@component
	This component is the webpage's Navbar.
	It contains the webpage badge and navigation links.
-->
<script lang="ts">
	// imports
	import { currentBreakpoint } from "../../../utils/stores";
	import { scrollToSection } from "../../../utils/scrolling";

	let smallBreakpoint: boolean = true;
	currentBreakpoint.subscribe((value) => {
		smallBreakpoint = value == "xs" || value == "sm" || value == "md";
	});
</script>

<div class="fixed bg-background {smallBreakpoint ? 'z-40' : 'z-20'} w-full">
	<nav
		class="flex {smallBreakpoint ? 'justify-center' : 'justify-between'} items-center px-16 py-8"
	>
		<button class="mr-12" on:click={() => scrollToSection(0)}
			><h1 class="text-3xl font-babas-neue text-accent0 tracking-normal">
				MÁRIO TRAVASSOS
			</h1></button
		>
		<!-- <div class="bg-background px-3 py-4 rounded-full">
			<div class="space-y-2">
				{#each Array(3) as _i}
					<div class="w-8 h-0.5 bg-accent0"></div>
				{/each}
			</div>
		</div> -->
		<div class="ml-12 flex">
			<a class="pr-4" href="/#/"
				><h2 class="text-2xl font-babas-neue text-accent0 color-fade-anim">Home</h2></a
			>
			<a class="pl-4" href="/#/interests"
				><h2 class="text-2xl font-babas-neue text-accent0 color-fade-anim">Interests</h2></a
			>
		</div>
	</nav>
</div>

<style>
</style>
