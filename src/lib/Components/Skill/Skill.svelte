<!--
@component
	This component renders a skill element. It consists of a (actually multiple) gradient background(s), a background image, some text, and some other text that is only displayed when hovered.

		@param gridID - number - number of the item on the skills grid
		@param skillData - SkillData - holds the data which will be displayed on this element
-->
<script lang="ts">
	// imports
	import type { SkillData } from "../../../types/Skill";

	import GradientTransition from "../GradientTransition/GradientTransition.svelte";
	import TextGroup from "../Text/TextGroup.svelte";

	import { splitArray } from "../../../utils/arrayFilters";

	// props
	export let skillData: SkillData = {
		title: "",
		description: "",
		technologies: [""],
		bannerImg: "placeholder",
	};

	// this value controls the gradient transition direction, where and how big the dent in the container is, among other things
	// it is ignored when the viewport is small enough
	export let gridID: number = 0;
	// controls whether the skill is a simple card-like component or a prettier one
	export let smallBreakpoint: boolean = false;

	// component code
	const WIDTH_PERCENTS: number[] = [57, 43, 50, 50, 43, 57];
	const widthPercent: number = WIDTH_PERCENTS[gridID];
	const afterPaddingPX: number = 70;
	const skillHeightPX: number = 150;
	const onRight: boolean = Boolean(gridID % 2); // for readibility's sake

	// control visibility of skill face content
	// Note to self: this is done via javascript, because we cannot handle the visibility of elements
	//					which are not the subsequent siblings of another element we are hovering hover
	let hideFront: boolean = false;
	let hideBack: boolean = true;
	const toggleCardVisibility: () => void = () => {
		hideFront = !hideFront;
		hideBack = !hideBack;
	};

	const technologyRows: string[][] = splitArray(skillData.technologies, 2);
</script>

<li
	class="skill flex relative color-fade-anim overflow-hidden rounded{smallBreakpoint
		? ''
		: onRight
		? '-r'
		: '-l'}-lg"
	style="--width-percent:{widthPercent}; --after-width-px:{afterPaddingPX}; --skill-height-px:{skillHeightPX}"
>
	<GradientTransition toRight={smallBreakpoint ? false : onRight} />
	<!-- bg image -->
	<img
		class="absolute inset-0 w-full opacity-30"
		src={`./banners/${skillData.bannerImg}.jpg`}
		alt={skillData.title}
	/>
	<!-- front -->
	<div
		class="flex items-center w-full {smallBreakpoint
			? ''
			: onRight
			? 'slider-left'
			: 'slider-right'}"
		on:mouseenter={toggleCardVisibility}
		on:mouseleave={toggleCardVisibility}
	>
		<div
			class="w-full {smallBreakpoint ? '' : onRight ? 'pr-6' : 'pl-6'}"
			class:hide-left={onRight && hideFront}
			class:hide-right={!onRight && hideFront}
			class:return={!hideFront}
		>
			<TextGroup
				title={skillData.title}
				subtitle={skillData.description}
				showBar={false}
				titleSize="3xl"
				align={smallBreakpoint ? "center" : onRight ? "right" : "left"}
				subtitlePadding={false}
			/>
		</div>
	</div>
	<!-- back -->
	<button
		class="absolute top-0 left-0 {hideBack
			? 'hidden'
			: 'flex'} w-full h-full flex-col justify-center px-2 {smallBreakpoint
			? ''
			: onRight
			? 'slider-left'
			: 'slider-right'}"
		on:mouseenter={toggleCardVisibility}
		on:mouseleave={toggleCardVisibility}
	>
		<div
			class="w-full max-h-full flex flex-col justify-center {smallBreakpoint
				? 'fade-in-top'
				: onRight
				? 'fade-in-right'
				: 'fade-in-left'}"
		>
			{#each technologyRows as technologyRow}
				<div
					class="h-1/3 sm:h-1/2 flex items-center {smallBreakpoint
						? 'justify-center'
						: onRight
						? 'flex-row-reverse'
						: 'flex-row'}"
				>
					{#each technologyRow as technologyName}
						<img
							src={`./skills/${technologyName}.png`}
							alt={technologyName}
							class="px-3 h-2/3 w-auto"
						/>
					{/each}
				</div>
			{/each}
		</div>
	</button>
</li>

<style>
	.skill {
		/* Could have defined the height with tailwind, but here we avoid having to deal with multiple magic values, as tailwind doesn't compile classNames generated dynamically (without safelisting - which I don't want to bloat up further) */
		width: calc(var(--width-percent) * 1%);
		height: calc(var(--skill-height-px) * 1px);
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
		height: 100%; /* always --skill-height-px pixels anyways*/
		background-color: transparent;
		top: 0;
	}

	.slider-right::after {
		right: 0;
		border-top: calc(var(--skill-height-px) * 1px) solid transparent;
		border-right: calc(var(--after-width-px) * 1px) solid var(--background2);
	}

	.slider-left::after {
		left: 0;
		border-bottom: calc(var(--skill-height-px) * 1px) solid transparent;
		border-left: calc(var(--after-width-px) * 1px) solid var(--background2);
	}
</style>
