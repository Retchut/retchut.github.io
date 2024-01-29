<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	import type { ProjectData } from "../../types/Project";
	import type { CardData } from "../../types/Card";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Project from "../Components/Project/Project.svelte";
	import Card from "../Components/Card/Card.svelte";

	import sectionData from "../Assets/Data/Projects.json";

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const projects: ProjectData[] = sectionData["projects"] ?? [];
	const gitCardData: CardData = sectionData["gitCard"] ?? {};
	console.log(projects[0]);
	console.log(gitCardData);
</script>

<PageSection screenHeight={false}>
	<div class="pt-[12.5%] pb-[180px]">
		<header class=" w-full text-main">
			<TextGroup {title} titleSize="5axl" />
		</header>
		<ul class="w-full px-20 flex flex-col gap-12">
			{#each projects as projectData, i}
				<Project {projectData} />
			{/each}
			<Card cardData={gitCardData} />
		</ul>
	</div>
</PageSection>

<style>
</style>
