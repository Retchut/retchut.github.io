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

	import { theme } from "../../utils/stores";
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
	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	let galleryEl: HTMLElement;
	let smallTabEl: HTMLElement;
	let galleryWidth: number;
	let smallTabSize: number = 0;
	let visibleProjTab: number = 0;
	const selectorBarSize: number = 64; // w-16 is 4rem which is 64px

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

	// let translateX: number = 0;
</script>

<PageSection screenHeight={false}>
	<div class="pt-[12.5%]">
		<header class=" w-full text-main">
			<TextGroup {title} titleSize="6xl" />
		</header>

		<div class="text-main">
			<!-- Selector -->
			<div>
				<div class="peer flex justify-between">
					{#each ["Web Development", "XR and Computer Graphics", "Game Development"] as title, index}
						<button class="" on:click={() => galleryScrollTo(index)}>
							<TextGroup {title} titleSize="5xl" align="center" showBar={false} />
						</button>
					{/each}
				</div>
				<!-- <TextGroupBar
					align={visibleProjTab === 0 ? "left" : visibleProjTab === 1 ? "center" : "right"}
				/> -->
				<!-- <TextGroupBar class={visibleProjTab === 0 ? "translate-x-10" : visibleProjTab === 1 ? "center" : "right"} /> -->

				<hr
					style="--middle-translate-x:{(galleryWidth - selectorBarSize) /
						2}px; --end-translate-x:{galleryWidth - selectorBarSize}px;"
					class="w-16 border-accent{themeVal} border-2 rounded-full mb-6 color-fade-anim {visibleProjTab ===
					0
						? 'translate-x-0'
						: visibleProjTab === 1
						? 'translate-middle'
						: 'translate-end'}"
				/>
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

	.translate-middle {
		transform: translateX(var(--middle-translate-x));
	}

	.translate-end {
		transform: translateX(var(--end-translate-x));
	}
</style>
