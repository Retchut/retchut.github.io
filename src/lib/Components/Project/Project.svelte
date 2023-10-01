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
		imgName: "",
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

	// control visibility of project face content
	// Note to self: this is done via javascript, because we cannot handle the visibility of elements
	//					which are not the subsequent siblings of another element we are hovering hover
	let hideFront: boolean = false;
	const toggleShowVisibility: () => void = () => {
		hideFront = !hideFront;
	};
</script>

<li
	class="project flex relative color-fade-anim overflow-hidden bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent{themeVal} from-60% to-background2 rounded-{onRight ? 'r' : 'l'}-lg"
	style="--width-percent:{widthPercent}; --after-width-px:{afterPaddingPX}; --project-height-px:{projectHeightPX}"
>
	<img
		class="z-0 absolute inset-0 w-full opacity-30"
		src={`./projects/${projectData.imgName}.jpg`}
		alt={projectData.imgName}
	/>
	<div class="z-10 peer flex items-center w-full {onRight ? 'slider-left' : 'slider-right'}">
		<div
			class="w-full"
			class:hide-left={onRight && hideFront}
			class:hide-right={!onRight && hideFront}
			class:return={!hideFront}
		>
			<TextGroup
				title={projectData.title}
				showBar={false}
				titleSize="2xl"
				align={onRight ? "left" : "right"}
			/>
		</div>
	</div>
	<a
		href={projectData.projectURL}
		class="z-20 absolute top-0 left-0 hidden w-full h-full peer-hover:flex hover:flex flex-col justify-center px-8 {onRight
			? 'slider-left'
			: 'slider-right'}"
		on:mouseenter={toggleShowVisibility}
		on:mouseleave={toggleShowVisibility}
	>
		<div class={onRight ? "fade-in-right" : "fade-in-left"}>
			<TextGroup
				title={projectData.title}
				paragraphs={projectData.description}
				showBar={false}
				titleSize="2xl"
				align={onRight ? "right" : "left"}
			/>
		</div>
	</a>
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

	.hide-left {
		transition: 500ms;
		opacity: 0;
		transform: translateX(-100px);
	}

	.hide-right {
		transition: 500ms;
		opacity: 0;
		transform: translateX(100px);
	}

	.return {
		transition: 500ms;
		opacity: 1;
		transform: translateX(0px);
	}
</style>
