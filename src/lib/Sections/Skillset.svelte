<!--
@component
	This component is the webpage's Skillset section.
-->
<script lang="ts">
	import Card from "../Components/Card/Card.svelte";

	import sectionData from "../Assets/Data/Skillset.json";
	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";

	interface FrontData {
		title: string[];
		subtitle: string;
	}

	interface CardData {
		frontData: FrontData;
		technologies: string[];
	}

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const cards: CardData[] = sectionData["cards"] ?? [
		{
			frontData: {
				title: ["Default", "Title"],
				subtitle: "This is a subtitle"
			},
			technologies: ["placeholder"]
		}
	];
</script>

<ShowcaseSection {title}>
	<div class="flex justify-center">
		<div class="w-[80%] grid grid-cols-3 divide-background2 divide-x divide-y-0 relative">
			{#each cards as cardData, index}
				<Card
					frontTitle={cardData.frontData.title}
					frontSubtitle={cardData.frontData.subtitle}
					backImages={cardData.technologies}
					{index}
				/>
			{/each}
		</div>
	</div>
</ShowcaseSection>

<style>
</style>
