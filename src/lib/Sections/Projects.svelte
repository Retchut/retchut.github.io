<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	// imports
	import type { ProjectData } from "../../types/Project";
	import type { CardData } from "../../types/Card";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Project from "../Components/Project/Project.svelte";
	import Card from "../Components/Card/Card.svelte";

	import { scrollSnap } from "../../utils/stores";
	import sectionData from "../Assets/Data/Projects.json";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitle";
	const projects: ProjectData[] = sectionData["projects"] ?? [];
	const gitCardData: CardData = sectionData["gitCard"] ?? {};

	let snapping: boolean;
	scrollSnap.subscribe((value) => {
		snapping = value;
	});
</script>

<PageSection screenHeight={false}>
	<div class="pt-[12.5%] {snapping ? 'pb-[400px]' : ''}">
		<header class=" w-full text-main">
			<TextGroup {title} titleSize="5axl" />
		</header>
		<ul class="w-full px-4 mt-8 2xl:px-20 flex flex-col gap-12">
			{#each projects as projectData}
				<Project {projectData} />
			{/each}
			<Card cardData={gitCardData} />
		</ul>
	</div>
</PageSection>

<style>
</style>
