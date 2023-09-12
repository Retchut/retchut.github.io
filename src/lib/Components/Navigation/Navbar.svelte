<script lang="ts">
	import { theme } from "../../../utils/stores";

	import Button from "../Button/Button.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const toggleTheme = () => {
		theme.update((value) => (value + 1) % 4);
	};
</script>

<div class="fixed z-30 w-full">
	<nav class="flex justify-between items-center px-16 py-8">
		<h1 class="text-3xl font-babas-neue text-accent{themeVal} fade-anim">MÁRIO TRAVASSOS</h1>
		<!-- Test themes button -->
		<Button class="p-2 px-4" text="Toggle theme" action={toggleTheme} />
		<div class="bg-background px-3 py-4 rounded-full">
			<div class="space-y-2">
				{#each Array(3) as _i}
					<div class="w-8 h-0.5 fade-anim bg-accent{themeVal}"></div>
				{/each}
			</div>
		</div>
	</nav>
</div>

<style>
</style>
