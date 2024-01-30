<!--
@component
	This component is the webpage's Skillset section.
-->
<script lang="ts">
	// imports
	import type { SkillData } from "../../types/Skill";

	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";
	import Skill from "../Components/Skill/Skill.svelte";

	import { currentBreakpoint } from "../../utils/stores";
	import sectionData from "../Assets/Data/Skillset.json";
	import { buildRows } from "../../utils/arrayFilters";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitle";
	const skills: SkillData[] = sectionData["skills"] ?? [
		{
			title: "Default Title",
			description: "This is a subtitle",
			technologies: ["placeholder"],
		},
	];

	let smallBreakpoint: boolean = true;
	currentBreakpoint.subscribe((value) => {
		smallBreakpoint = value == "xs" || value == "sm" || value == "md";
		console.log(value);
	});

	const skillRows: SkillData[][] = buildRows(skills, 2);
</script>

<ShowcaseSection {title}>
	<ul class="w-full px-12">
		<!-- Display all skills in a column on small screens -->
		{#if smallBreakpoint}
			{#each skills as skillData}
				<div class="my-8">
					<Skill {skillData} {smallBreakpoint} gridID={-1} />
				</div>
			{/each}
		{:else}
			<!-- Display all skills in two columns on larger screens -->
			{#each skillRows as skillRow, r}
				<div class="my-8 flex gap-8">
					{#each skillRow as skillData, c}
						<Skill {skillData} gridID={r * 2 + c} />
					{/each}
				</div>
			{/each}
		{/if}
	</ul>
</ShowcaseSection>

<style>
</style>
