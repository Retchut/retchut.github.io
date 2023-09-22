<script lang="ts">
	import { theme } from "../../../utils/stores";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<div class="fixed z-30 w-full">
	<nav class="flex justify-between items-center px-16 py-8">
		<h1 class="text-3xl font-babas-neue text-accent{themeVal} color-fade-anim">MÁRIO TRAVASSOS</h1>
		<!-- Test themes button -->
		<div class="bg-background px-3 py-4 rounded-full">
			<div class="space-y-2">
				{#each Array(3) as _i}
					<div class="w-8 h-0.5 color-fade-anim bg-accent{themeVal}"></div>
				{/each}
			</div>
		</div>
	</nav>
</div>

<style>
</style>
