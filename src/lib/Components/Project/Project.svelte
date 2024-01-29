<!--
@component
	This component renders a project element. It consists of a (actually multiple) gradient background(s), a background image, some text, and some other text that is only displayed when hovered.

		@param gridID - number - number of the item on the projects grid
		@param projectData - ProjectData - holds the data which will be displayed on this element
-->
<script lang="ts">
	import type { ProjectData } from "../../../types/Project";

	import TextGroup from "../Text/TextGroup.svelte";
	import Tag from "../Tags/Tag.svelte";

	export let projectData: ProjectData = {
		title: "",
		description: [""],
		contributions: [""],
		imgName: "",
		tags: [""],
		techs: [""],
		projectURL: "",
	};
</script>

<li class="flex flex-col md:flex-row gap-8 md:gap-y-0">
	<!-- bg image -->
	<img
		class="w-full md:w-1/3 self-start aspect-square object-contain rounded-md"
		src={`./projects/${projectData.imgName}-hd.jpg`}
		alt={projectData.imgName}
	/>
	<div class="w-full md:w-2/3 flex flex-col text-main gap-6">
		<div>
			<TextGroup title={projectData.title} titleSize="5xl" paragraphs={projectData.description} />
		</div>
		{#if projectData.contributions.length > 0}
			<div>
				<TextGroup
					title="My Contributions"
					titleSize="3xl"
					paragraphs={projectData.contributions}
					descriptionBullets={true}
				/>
			</div>
		{/if}
		<div class="flex items-center">
			<span class="text-lg pr-2">Tags:</span>
			{#each projectData.tags as content}
				<Tag {content} />
			{/each}
			{#each projectData.techs as content}
				<Tag {content} isTech={true} />
			{/each}
		</div>
	</div>
</li>

<style>
</style>
