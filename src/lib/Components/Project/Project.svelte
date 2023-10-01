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

	const WIDTH_PERCENTS: number[] = [57, 43, 50, 50, 43, 57];
	const widthPercent: number = WIDTH_PERCENTS[gridID];
	const afterPaddingPX: number = 70;
	const projectHeightPX: number = 150;
	const onRight: boolean = Boolean(gridID % 2); // for readibility's sake
</script>

<li
	class="project flex relative color-fade-anim overflow-hidden bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent{themeVal} from-60% to-background2 rounded-{onRight ? 'r' : 'l'}-lg"
	style="--width-percent:{widthPercent}; --after-width-px:{afterPaddingPX}; --project-height-px:{projectHeightPX}"
>
	<div class="peer w-full h-full {onRight ? 'slider-left' : 'slider-right'}"></div>
	<div
		class="absolute top-0 left-0 z-10 hidden w-full h-full peer-hover:flex hover:flex flex-col justify-center px-8 {onRight
			? 'slider-left'
			: 'slider-right'}"
	>
		<TextGroup
			title={projectData.title}
			paragraphs={projectData.description}
			showBar={false}
			titleSize="2xl"
			align={onRight ? "right" : "left"}
		/>
	</div>
</li>

<style>
	.project {
		/* Could have defined the height with tailwind, but here we avoid having to deal with multiple magic values, as tailwind doesn't compile classNames generated dynamically (without safelisting) */
		width: calc(var(--width-percent) * 1%);
		height: calc(var(--project-height-px) * 1px);
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
