<script lang="ts">
	import { theme } from "../utils/stores";

	import "../utils/testThemes.css";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const toggleTheme = () => {
		theme.update((value) => (value + 1) % 4);
	};
</script>

<nav class="flex justify-between items-center px-16 py-8">
	<h1 class="text-3xl font-babas-neue logotheme{themeVal} fade-anim">MÁRIO TRAVASSOS</h1>
	<!-- Test themes button -->
	<button
		class="btntheme{themeVal} border-2 p-2 px-4 rounded-full fade-anim"
		on:click={() => toggleTheme()}>Toggle theme</button
	>
	<div class="bg-background px-3 py-4 rounded-full">
		<div class="space-y-2">
			<div class="hamburguer-inactive fade-anim hamburguertheme{themeVal}"></div>
			<div class="hamburguer-inactive fade-anim hamburguertheme{themeVal}"></div>
			<div class="hamburguer-inactive fade-anim hamburguertheme{themeVal}"></div>
		</div>
	</div>
</nav>

<style>
	.hamburguer-inactive {
		@apply w-8 h-0.5;
	}

	.fade-anim {
		@apply ease-in duration-200;
	}
</style>
