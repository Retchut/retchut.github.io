<script lang="ts">
	import { theme } from "../utils/stores";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const toggleTheme = () => {
		theme.update((value) => (value + 1) % 4);
	};
</script>

<nav class="flex justify-between items-center px-16 py-8">
	<h1 class="text-3xl font-babas-neue logotheme{themeVal}">MÁRIO TRAVASSOS</h1>
	<!-- Test themes button -->
	<button class="swappertheme{themeVal} p-2 px-4 rounded-full" on:click={() => toggleTheme()}
		>Toggle theme</button
	>
	<div class="bg-background px-3 py-4 rounded-full">
		<div class="space-y-2">
			<div class="w-8 h-0.5 bg-title"></div>
			<div class="w-8 h-0.5 bg-title"></div>
			<div class="w-8 h-0.5 bg-title"></div>
		</div>
	</div>
</nav>

<style>
	.logotheme0 {
		@apply text-scheme1accent0;
	}

	.logotheme1 {
		@apply text-scheme1accent1;
	}

	.logotheme2 {
		@apply text-scheme1accent2;
	}

	.logotheme3 {
		@apply text-scheme1accent3;
	}

	.swappertheme0 {
		@apply bg-scheme1accent0;
	}

	.swappertheme1 {
		@apply bg-scheme1accent1;
	}

	.swappertheme2 {
		@apply bg-scheme1accent2;
	}

	.swappertheme3 {
		@apply bg-scheme1accent3;
	}
</style>
