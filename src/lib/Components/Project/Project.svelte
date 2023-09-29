<script lang="ts">
	import type { ProjectData } from "../../../types/Project";

	import { theme } from "../../../utils/stores";

	import TextGroup from "../Text/TextGroup.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	export let projectData: ProjectData = {
		title: "",
		description: [""],
		imgPath: "",
		tags: [""],
		techs: [""],
		projectURL: ""
	};

	export let gridID: number = 0;

	const afterPaddingPX: number = 70;
	const projectHeightPX: number = 150;
</script>

<li
	class="project {gridID % 2
		? 'slider-left'
		: 'slider-right'} bg-accent{themeVal} color-fade-anim overflow-hidden"
	style="--after-width-px:{afterPaddingPX}; --project-height-px:{projectHeightPX}"
>
	<div class="w-full flex flex-col justify-center px-8">
		<TextGroup
			title={projectData.title}
			paragraphs={projectData.description}
			showBar={false}
			titleSize="2xl"
			align={gridID % 2 ? "right" : "left"}
		/>
	</div>
</li>

<style>
	.project {
		/* Some stuff that could be defined in tailwind is also defined here to avoid having to deal with multiple magic values, as tailwind doesn't compile classNames generated during runtime (without safelisting) */
		height: calc(var(--project-height-px) * 1px);
		display: flex;
		position: relative;
	}

	.slider-right {
		padding-right: calc(var(--after-width-px) * 1px);
	}

	.slider-left {
		padding-left: calc(var(--after-width-px) * 1px);
	}

	.slider-right::after,
	.slider-left::after {
		position: absolute;
		content: "";
		width: calc(var(--after-width-px) * 1px);
		height: 100%; /* always --project-height-px pixels anyways*/
		background-color: transparent;
		top: 0;
	}

	.slider-right::after {
		right: 0;
		border-top: calc(var(--project-height-px) * 1px) solid transparent;
		border-right: calc(var(--after-width-px) * 1px) solid var(--background2);
	}

	.slider-left::after {
		left: 0;
		border-bottom: calc(var(--project-height-px) * 1px) solid transparent;
		border-left: calc(var(--after-width-px) * 1px) solid var(--background2);
	}
</style>
