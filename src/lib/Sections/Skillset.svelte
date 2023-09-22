<script lang="ts">
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Card from "../Components/Card/Card.svelte";

	import sectionData from "../Assets/Data/Skillset.json";

	interface CardData {
		title: string[];
		technologies: string[];
	}

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const cards: CardData[] = sectionData["cards"] ?? [
		{ title: ["Default", "Card"], technologies: ["placeholder"] }
	];
</script>

<PageSection>
	<header class="w-1/3 text-main">
		<TextGroup {title} />
	</header>
	<div class="flex justify-center">
		<div class="w-[80%] grid grid-cols-3 divide-background2 divide-x divide-y-0 relative">
			{#each cards as data, index}
				<Card frontText={data.title} backImages={data.technologies} {index} />
			{/each}
		</div>
	</div>
</PageSection>

<style>
</style>
