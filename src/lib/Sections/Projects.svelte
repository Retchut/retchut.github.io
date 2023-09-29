<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	import type { ProjectData } from "../../types/Project";

	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";
	import Project from "../Components/Project/Project.svelte";

	import sectionData from "../Assets/Data/Projects.json";

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const projects: ProjectData[] = sectionData["projects"] ?? [];
</script>

<ShowcaseSection {title}>
	<ul class="grid grid-cols-2 grid-rows-2 gap-6 w-full px-12 py-8">
		{#each projects as projectData, i}
			<Project {projectData} gridID={i} />
		{/each}
	</ul>
</ShowcaseSection>

<style>
</style>
