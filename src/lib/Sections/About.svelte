<!--
@component
	This component is the webpage's About section.
-->
<script lang="ts">
	// imports
	import { currentBreakpoint } from "../../utils/stores";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";

	import sectionData from "../Assets/Data/About.json";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];

	const title2: string = sectionData["title2"] ?? "DefaultTitleTxt2";
	const paragraphs2: string[] = sectionData["paragraphs2"] ?? ["DefaultValue2"];

	let smallBreakpoint: boolean = true;
	currentBreakpoint.subscribe((value) => {
		smallBreakpoint = value == "xs" || value == "sm" || value == "md";
	});
</script>

<PageSection screenHeight={!smallBreakpoint}>
	<div
		class="py-[12.5%] flex flex-col items-center gap-y-8 lg:gap-y-0 lg:items-start lg:flex-row lg:justify-between"
	>
		<header class="w-full lg:w-5/12 text-main">
			<TextGroup {title} {paragraphs} />
		</header>
		<div class="w-full lg:w-1/2 self-end flex flex-col text-main">
			<div class="grow flex justify-center lg:justify-end items-start mb-8">
				<img
					src="/about.jpg"
					alt="My portrait... again"
					class="w-[350px] rounded-lg shadow-image shadow-accent0"
				/>
			</div>
			<TextGroup title={title2} paragraphs={paragraphs2} />
		</div>
	</div>
</PageSection>

<style>
</style>
