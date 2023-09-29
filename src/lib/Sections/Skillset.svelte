<!--
@component
	This component is the webpage's Skillset section.
-->
<script lang="ts">
	import type { CardData } from "../../types/Card";

	import Card from "../Components/Card/Card.svelte";

	import sectionData from "../Assets/Data/Skillset.json";
	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const cards: CardData[] = sectionData["cards"] ?? [
		{
			frontData: {
				title: ["Default", "Title"],
				subtitle: "This is a subtitle"
			},
			backData: {
				technologies: ["placeholder"]
			}
		}
	];
</script>

<ShowcaseSection {title}>
	<div class="flex justify-center">
		<div class="w-[80%] grid grid-cols-3 divide-background2 divide-x divide-y-0 relative">
			{#each cards as cardData, index}
				<Card frontData={cardData.frontData} backData={cardData.backData} {index} />
			{/each}
		</div>
	</div>
</ShowcaseSection>

<style>
</style>
