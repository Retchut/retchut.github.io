<!--
@component
	This component is the webpage's Skillset section.
-->
<script lang="ts">
	// imports
	import type { SkillData } from "../../types/Skill";

	import ShowcaseSection from "../Components/Layout/ShowcaseSection.svelte";
	import Skill from "../Components/Skill/Skill.svelte";

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
	const skillRows: SkillData[][] = buildRows(skills, 2);
</script>

<ShowcaseSection {title}>
	<ul class="w-full px-12">
		{#each skillRows as skillRow, r}
			<div class="my-8 flex gap-8">
				{#each skillRow as skillData, c}
					<Skill {skillData} gridID={r * 2 + c} />
				{/each}
			</div>
		{/each}
	</ul>
</ShowcaseSection>

<style>
</style>
