<!--
@component
	This component is the webpage's Navbar.
	It contains the webpage badge and navigation links.
-->
<script lang="ts">
	import { get } from "svelte/store";
	import { theme, scrollSnap } from "../../../utils/stores";
	import Button from "../Button/Button.svelte";

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
		<h1 class="text-3xl font-babas-neue text-accent{themeVal} color-fade-anim">MÁRIO TRAVASSOS</h1>
		<Button
			class="py-2 px-4"
			action={() => scrollSnap.update((value) => !value)}
			text={`Scroll hijacking ${snapping ? "enabled" : "disabled"}`}
		/>
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
