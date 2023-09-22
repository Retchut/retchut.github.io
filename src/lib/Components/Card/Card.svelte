<!--
@component
This component consists of a card, with a front and a back, the latter of which is initially hidden and can be seen by hovering over the front.
The front of the card consists of some paragraphs of descriptive text.
The back of the card consists of a collection images split in 3 columns.

	@param frontText - string[] - array of paragraph strings that comprise the front of the card
	@param backImages - string[] - array of strings consisting of the image names (inside the public/cards/ directory) that comprise the back of the card
	@param index - number - number used to calculate the margin of the card.
-->
<script lang="ts">
	import { buildRows } from "../../../utils/arrayFilters";
	import { theme } from "../../../utils/stores";

	export let frontText: string[] = ["paragraph1", "paragraph2"];
	export let backImages: string[] = ["tech1", "tech2"];
	export let index: number = 0;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const technologyRows = buildRows(backImages, 3);
</script>

<article
	class="fade-anim mx-8 index{index} bg-accent{themeVal} text-background flex justify-center items-center min-h-[400px] rounded-lg relative"
>
	<!-- Card Front -->
	<header class="flex flex-col w-full h-full justify-center peer">
		{#each frontText as paragraph}
			<h3 class="text-3xl text-center">{paragraph}</h3>
		{/each}
	</header>
	<!-- Card Back -->
	<div
		class="hidden peer-hover:flex hover:flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 rounded-lg bg-accent{themeVal} p-16"
	>
		{#each technologyRows as srcRow}
			<div class="my-2 fade-in-content flex justify-center items-center">
				{#each srcRow as src}
					<div class="mx-1 w-[70px]">
						<img src={`./cards/${src}.png`} alt={src} />
					</div>
				{/each}
			</div>
		{/each}
	</div>
</article>

<style>
	.fade-in-content {
		animation: fadeInTop 500ms;
	}

	.index0,
	.index2 {
		margin-top: 3rem;
		margin-bottom: 0rem;
	}
	.index1 {
		margin-top: 0rem;
		margin-bottom: 2rem;
	}
</style>
