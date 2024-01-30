<!--
@component
	This component is the webpage's Navbar.
	It contains the webpage badge and navigation links.

		@param hideSnapControls - boolean - true if the section controls will be hidden. false by default
-->
<script lang="ts">
	// imports
	import Button from "../Button/Button.svelte";

	import { theme, scrollSnap } from "../../../utils/stores";
	import { scrollToSection } from "../../../utils/scrolling";

	// props
	export let hideSnapControls: boolean = false;

	// component code
	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});
</script>

<div class="fixed z-30 w-full">
	<nav class="flex justify-between items-center px-16 py-8">
		<button on:click={() => scrollToSection(0)}
			><h1 class="text-3xl font-babas-neue text-accent{themeVal} color-fade-anim">
				MÁRIO TRAVASSOS
			</h1></button
		>
		{#if !hideSnapControls}
			<Button
				class="py-2 px-4"
				action={() => scrollSnap.update((value) => !value)}
				text={`Scroll hijacking ${snapping ? "enabled" : "disabled"}`}
			/>
		{/if}
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
