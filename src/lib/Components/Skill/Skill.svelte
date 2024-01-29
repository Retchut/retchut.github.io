<!--
@component
	This component renders a skill element. It consists of a (actually multiple) gradient background(s), a background image, some text, and some other text that is only displayed when hovered.

		@param gridID - number - number of the item on the skills grid
		@param skillData - skillData - holds the data which will be displayed on this element
-->
<script lang="ts">
	import type { SkillData } from "../../../types/Skill";

	import GradientTransition from "./GradientTransition.svelte";
	import TextGroup from "../Text/TextGroup.svelte";

	import { splitArray } from "../../../utils/arrayFilters";

	export let skillData: SkillData = {
		title: "",
		description: "",
		technologies: [""],
	};

	export let gridID: number = 0;

	const WIDTH_PERCENTS: number[] = [57, 43, 50, 50, 43, 57];
	const widthPercent: number = WIDTH_PERCENTS[gridID];
	const afterPaddingPX: number = 70;
	const skillHeightPX: number = 150;
	const onRight: boolean = Boolean(gridID % 2); // for readibility's sake

	// control visibility of skill face content
	// Note to self: this is done via javascript, because we cannot handle the visibility of elements
	//					which are not the subsequent siblings of another element we are hovering hover
	let hideFront: boolean = false;
	const toggleShowVisibility: () => void = () => {
		hideFront = !hideFront;
	};

	const technologyRows: string[][] = splitArray(skillData.technologies, 2);
</script>

<li
	class="skill flex relative color-fade-anim overflow-hidden rounded-{onRight ? 'r' : 'l'}-lg"
	style="--width-percent:{widthPercent}; --after-width-px:{afterPaddingPX}; --skill-height-px:{skillHeightPX}"
>
	<GradientTransition {onRight} />
	<!-- bg image -->
	<!-- <img
		class="z-0 absolute inset-0 w-full opacity-30"
		src={`./skills/${skillData.imgName}.jpg`}
		alt={skillData.imgName}
	/> -->
	<!-- front -->
	<div class="z-10 peer flex items-center w-full {onRight ? 'slider-left' : 'slider-right'}">
		<div
			class="w-full {onRight ? 'pr-6' : 'pl-6'}"
			class:hide-left={onRight && hideFront}
			class:hide-right={!onRight && hideFront}
			class:return={!hideFront}
		>
			<TextGroup
				title={skillData.title}
				subtitle={skillData.description}
				showBar={false}
				titleSize="3xl"
				align={onRight ? "right" : "left"}
				subtitlePadding={false}
			/>
		</div>
	</div>
	<!-- back -->
	<button
		class="z-20 absolute top-0 left-0 hidden w-full h-full peer-hover:flex hover:flex flex-col justify-center px-2 {onRight
			? 'slider-left'
			: 'slider-right'}"
		on:mouseenter={toggleShowVisibility}
		on:mouseleave={toggleShowVisibility}
	>
		<div class="w-full max-h-full {onRight ? 'fade-in-right' : 'fade-in-left'}">
			<!-- <TextGroup
				paragraphs={[skillData.description]}
				showBar={false}
				titleSize="2xl"
				align={onRight ? "right" : "left"}
			/> -->
			{#each technologyRows as technologyRow}
				<div class="h-1/2 flex items-center {onRight ? 'flex-row-reverse' : 'flex-row'}">
					{#each technologyRow as technologyName}
						<img
							src={`./skills/${technologyName}.png`}
							alt={technologyName}
							class="px-3 h-2/3 w-auto"
						/>
					{/each}
				</div>
			{/each}
			<!-- {#each skillData.technologies as imgName}
				<img src={`./skills/${imgName}.png`} alt={imgName} class="h-full px-3" />
			{/each} -->
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
