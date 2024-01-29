<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	import type { ProjectData } from "../../types/Project";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Project from "../Components/Project/Project.svelte";

	import sectionData from "../Assets/Data/Projects.json";

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const projects: ProjectData[] = sectionData["projects"] ?? [];
	const gitCardData: ProjectData = sectionData["gitCard"] ?? {};
	console.log(projects[0]);
	console.log(gitCardData);
</script>

<PageSection screenHeight={false}>
	<div id="projectsSection" class="py-[12.5%]">
		<header class=" w-full text-main">
			<TextGroup {title} titleSize="5axl" />
		</header>
		<ul class="w-full px-20 flex flex-col gap-12">
			{#each projects as projectData, i}
				<Project {projectData} />
			{/each}
			<Project projectData={gitCardData} />
		</ul>
	</div>
</PageSection>

<style>
</style>
