<!--
@component
	This component is the webpage's Navbar.
	It contains the webpage badge and navigation links.
-->
<script lang="ts">
	// imports
	import { theme } from "../../../utils/stores";
	import { scrollToSection } from "../../../utils/scrolling";

	// component code
	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<div class="fixed bg-background z-20 w-full">
	<nav class="flex justify-between items-center px-16 py-8">
		<button on:click={() => scrollToSection(0)}
			><h1 class="text-3xl font-babas-neue text-accent{themeVal} color-fade-anim">
				MÁRIO TRAVASSOS
			</h1></button
		>
		<!-- <div class="bg-background px-3 py-4 rounded-full">
			<div class="space-y-2">
				{#each Array(3) as _i}
					<div class="w-8 h-0.5 color-fade-anim bg-accent{themeVal}"></div>
				{/each}
			</div>
		</div> -->
	</nav>
</div>

<style>
</style>
