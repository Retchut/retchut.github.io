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

	// component code
	let galleryEl: HTMLElement;
	let smallTabEl: HTMLElement;
	let galleryWidth: number;
	let smallTabSize: number = 0;
	let visibleProjTab: number = 0;

	onMount(() => {
		updateGalleryWidth();
		galleryScrollTo(0);
		console.log(galleryWidth);
	});

	const updateGalleryWidth = () => {
		galleryWidth = galleryEl.clientWidth;
		smallTabSize = smallTabEl.scrollHeight;
		console.log(galleryWidth, smallTabSize);
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
</script>

<PageSection screenHeight={false}>
	<div class="pt-[12.5%]">
		<header class=" w-full text-main">
			<TextGroup {title} titleSize="6xl" />
		</header>

		<div class="text-main">
			<!-- Selector -->
			<div class="flex justify-between">
				{#each ["Web Development", "XR and Computer Graphics", "Game Development"] as title, index}
					<button on:click={() => galleryScrollTo(index)}>
						<TextGroup {title} titleSize="5xl" align="center" />
					</button>
				{/each}
			</div>
			<!-- Gallery thingy -->
			<div
				bind:this={galleryEl}
				class="my-8 flex overflow-y-clip overflow-x-scroll no-scrollbar"
				style="--small-tab-size:{smallTabSize};"
			>
				<ul
					class="px-4 2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab ===
					0
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each webDev as projectData}
						<Project {projectData} />
					{/each}
				</ul>
				<ul
					bind:this={smallTabEl}
					class="px-4 2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab ===
					1
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each xrCG as projectData}
						<Project {projectData} />
					{/each}
				</ul>
				<ul
					class="px-4 2xl:px-20 w-full h-fit flex flex-col gap-12 flex-shrink-0 {visibleProjTab ===
					2
						? ''
						: 'crop-to-small-tab'}"
				>
					{#each gameDev as projectData}
						<Project {projectData} />
					{/each}
				</ul>
			</div>
			<div class="px-4 2xl:px-20 text-black">
				<Card cardData={gitCardData} />
			</div>
		</div>
	</div>
</PageSection>

<style>
	.crop-to-small-tab {
		max-height: calc(var(--small-tab-size) * 1px);
	}
</style>
