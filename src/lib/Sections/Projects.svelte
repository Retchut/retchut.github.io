<!--
@component
	This component is the webpage's Projects section.
-->
<script lang="ts">
	// imports
	import type { ProjectData } from "../../types/Project";
	import type { CardData } from "../../types/Card";

	import { onMount } from "svelte";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Project from "../Components/Project/Project.svelte";
	import Card from "../Components/Card/Card.svelte";

	import { currentBreakpoint } from "../../utils/stores";
	import sectionData from "../Assets/Data/Projects.json";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitle";
	const {
		webDev,
		xrCG,
		gameDev,
	}: { webDev: ProjectData[]; xrCG: ProjectData[]; gameDev: ProjectData[] } =
		sectionData["projects"] ?? [];
	const gitCardData: CardData = sectionData["gitCard"] ?? {};

	let smallBreakpoint: boolean = true;
	currentBreakpoint.subscribe((value) => {
		smallBreakpoint = value == "xs" || value == "sm" || value == "md";
	});

	let galleryEl: HTMLElement;
	let selectorEl: HTMLElement;
	let smallTabEl: HTMLElement;
	let galleryWidth: number;
	let selectorBarWidths: number[] = [0, 0, 0];
	let selectorBarHeights: number[] = [0, 0, 0];
	let selectorBarPadding: number = 16;
	let selectorHeight: number;
	let smallTabSize: number = 0;
	let visibleProjTab: number = 0;
	const selectorBarWidth: number = 64; // w-16 is 4rem which is 64px
	const selectorBarHeight: number = 20; // w-16 is 1.25rem which is 20px

	onMount(() => {
		updateGalleryWidth();
		galleryScrollTo(0);
	});

	// this is very iffy, only exists to recalculate the first offset of the projects tab selector - it's very unlikely that the user will have reached projects section in 1 second, so this will go unnoticed
	setTimeout(() => {
		updateGalleryWidth();
	}, 1000);

	const updateGalleryWidth = () => {
		galleryWidth = galleryEl.clientWidth;
		selectorHeight = selectorEl.clientHeight;
		smallTabSize = smallTabEl.scrollHeight;
		for (let i = 0; i < selectorEl.children.length; i++) {
			selectorBarWidths[i] = selectorEl.children[i].clientWidth;
			selectorBarHeights[i] = selectorEl.children[i].clientHeight;
		}
	};

	export const preserveGalleryWidth = () => {
		updateGalleryWidth();
		galleryScrollTo(visibleProjTab);
	};

	const galleryScrollTo = (section: number) => {
		if (galleryEl === null) {
			console.error("Gallery element not set");
			return;
		}
		updateGalleryWidth();
		galleryEl.scrollTo({
			top: 0,
			left: galleryWidth * section,
			behavior: "smooth",
		});
		visibleProjTab = section;
	};

	// let translateX: number = 0;
</script>

<PageSection screenHeight={false}>
	<div class="py-[12.5%]">
		<header class="w-full text-main">
			<TextGroup {title} titleSize="6xl" />
		</header>

		<div class="text-main 2xl:px-4">
			<!-- Selector -->
			<div class="flex {smallBreakpoint ? 'flex-row-reverse justify-center' : 'flex-col'}">
				<div
					bind:this={selectorEl}
					class="flex {smallBreakpoint ? 'flex-col' : 'flex-row'} justify-between"
				>
					{#each ["Web Development", "XR and Computer Graphics", "Game Development"] as title, index}
						<button on:click={() => galleryScrollTo(index)}>
							<TextGroup
								{title}
								titleSize="5xl"
								align={smallBreakpoint ? "left" : "center"}
								showBar={false}
							/>
						</button>
					{/each}
				</div>
				{#if smallBreakpoint}
					<div
						style="--start-translate-y:{(selectorBarHeights[0] -
							selectorBarHeight -
							selectorBarPadding / 2) /
							2}px;--middle-translate-y:{(selectorHeight -
							selectorBarHeight -
							selectorBarPadding / 2) /
							2}px; --end-translate-y:{selectorHeight -
							(selectorBarHeights[2] + selectorBarHeight) / 2 -
							selectorBarPadding / 2}px;"
						class="h-5 w-1 bg-accent0 rounded-full mr-2 {visibleProjTab === 0
							? 'translate-y-start'
							: visibleProjTab === 1
							? 'translate-y-middle'
							: 'translate-y-end'}"
					></div>
				{:else}
					<hr
						style="--start-translate-x:{(selectorBarWidths[0] - selectorBarWidth) /
							2}px;--middle-translate-x:{(galleryWidth - selectorBarWidth) /
							2}px; --end-translate-x:{galleryWidth -
							(selectorBarWidths[2] + selectorBarWidth) / 2}px;"
						class="w-16 border-accent0 border-2 rounded-full mb-6 {visibleProjTab === 0
							? 'translate-x-start'
							: visibleProjTab === 1
							? 'translate-x-middle'
							: 'translate-x-end'}"
					/>
				{/if}
			</div>
			<!-- Gallery thingy -->
			<div
				bind:this={galleryEl}
				class="my-8 flex overflow-y-clip overflow-x-scroll no-scrollbar"
				style="--small-tab-size:{smallTabSize};"
			>
				<ul
					class="2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab === 0
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each webDev as projectData}
						<Project {projectData} />
					{/each}
				</ul>
				<ul
					bind:this={smallTabEl}
					class="2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab === 1
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each xrCG as projectData}
						<Project {projectData} />
					{/each}
				</ul>
				<ul
					class="2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab === 2
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each gameDev as projectData}
						<Project {projectData} />
					{/each}
				</ul>
			</div>
			<div class="2xl:px-20 text-black">
				<Card cardData={gitCardData} />
			</div>
		</div>
	</div>
</PageSection>

<style>
	.crop-to-small-tab {
		max-height: calc(var(--small-tab-size) * 1px);
	}

	.translate-x-start {
		transform: translateX(var(--start-translate-x));
	}

	.translate-x-middle {
		transform: translateX(var(--middle-translate-x));
	}

	.translate-x-end {
		transform: translateX(var(--end-translate-x));
	}

	.translate-y-start {
		transform: translateY(var(--start-translate-y));
	}

	.translate-y-middle {
		transform: translateY(var(--middle-translate-y));
	}

	.translate-y-end {
		transform: translateY(var(--end-translate-y));
	}
</style>
