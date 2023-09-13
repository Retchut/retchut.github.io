<script lang="ts">
	import { theme } from "../../../utils/stores";

	export let data = { title: "title", content: "content" };
	const { title, content } = data;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<article class="h-[100px] border-2 border-accent{themeVal} bg-accent{themeVal} text-background">
	<!-- Card Front -->
	<div class="peer h-full flex flex-col justify-center">
		{#each title as paragraph}
			<h3 class="text-xl text-center">{paragraph}</h3>
		{/each}
	</div>
	<!-- Card back -->
	<div
		class="hidden peer-hover:block hover:block absolute top-0 left-0 z-10 w-full h-full overflow-hidden bg-green-900"
	>
		<div class="bg-accent{themeVal} w-full flex">
			{#each content as imgSrc}
				<img class="p-4 max-h-[100px]" src={`./cards/${imgSrc}.png`} alt={imgSrc} />
			{/each}
		</div>
	</div>
</article>

<style>
</style>
