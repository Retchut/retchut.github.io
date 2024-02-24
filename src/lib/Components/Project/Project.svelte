<!--
@component
	This component renders a project element. It consists of a (actually multiple) gradient background(s), a background image, some text, and some other text that is only displayed when hovered.

		@param projectData - ProjectData - holds the data which will be displayed on this element
-->
<script lang="ts">
	// imports
	import type { ProjectData } from "../../../types/Project";

	import { currentBreakpoint } from "../../../utils/stores";

	import TextGroup from "../Text/TextGroup.svelte";
	import Tag from "../Tags/Tag.svelte";
	import Anchor from "../Button/Anchor.svelte";

	// props
	export let projectData: ProjectData = {
		title: "",
		description: [""],
		contributions: [""],
		imgName: "",
		tags: [""],
		techs: [""],
		projectButtonText: "",
		projectURL: "",
	};

	let smallBreakpoint: boolean = true;
	let buttonBelowText: boolean = true;
	currentBreakpoint.subscribe((value) => {
		smallBreakpoint = value == "xs" || value == "sm" || value == "md";
		buttonBelowText = value == "xs" || value == "sm";
	});
</script>

<li class="flex flex-col md:flex-row gap-8 md:gap-y-0">
	<div class="w-full h-full md:w-1/3 max-w-[300px] p-2 self-center md:self-start">
		<img
			class="aspect-square object-contain rounded-lg shadow-image shadow-accent0"
			src={`./projects/${projectData.imgName}-hd.jpg`}
			alt={projectData.imgName}
		/>
		{#if !buttonBelowText}
			{#if projectData.projectURL !== ""}
				<div class="flex">
					<Anchor
						class="w-fit px-6 py-4 mt-4 mx-auto text-center"
						text={projectData.projectButtonText}
						targetURL={projectData.projectURL}
					/>
				</div>
			{/if}
		{/if}
	</div>
	<div class="w-full md:w-2/3 flex flex-col text-main gap-6">
		<div>
			<TextGroup title={projectData.title} titleSize="4xl" paragraphs={projectData.description} />
		</div>
		{#if projectData.contributions.length > 0}
			<div>
				<TextGroup
					title="My Contributions"
					titleSize="3xl"
					paragraphs={projectData.contributions}
					paragraphBullets={true}
				/>
			</div>
		{/if}
		<div class="flex items-center">
			<p class="text-lg pr-2">Tags:</p>
			<div class="flex flex-wrap">
				{#each projectData.tags as content}
					<Tag {content} />
				{/each}
				{#each projectData.techs as content}
					<Tag {content} isTech={true} />
				{/each}
			</div>
		</div>
		{#if buttonBelowText}
			{#if projectData.projectURL !== ""}
				<div class="flex">
					<Anchor
						class="w-1/2 px-6 py-4 mx-auto text-center"
						text={projectData.projectButtonText}
						targetURL={projectData.projectURL}
					/>
				</div>
			{/if}
		{/if}
	</div>
</li>
<hr class="text-main" />

<style>
</style>
