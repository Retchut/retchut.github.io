<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	import type { ProjectData } from "../../types/Project";

	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";
	import Project from "../Components/Project/Project.svelte";

	import sectionData from "../Assets/Data/Projects.json";
	import { buildRows } from "../../utils/arrayFilters";

	const title: string = sectionData["title"] ?? "DefaultTitle";
	const projects: ProjectData[] = sectionData["projects"] ?? [];

	const projectRows: ProjectData[][] = buildRows(projects, 2);
</script>

<ShowcaseSection {title}>
	<ul class="w-full px-12">
		{#each projectRows as projectRow, r}
			<div class="my-8 flex gap-8">
				{#each projectRow as projectData, c}
					<Project {projectData} gridID={r * 2 + c} />
				{/each}
			</div>
		{/each}
	</ul>
</ShowcaseSection>

<style>
</style>
