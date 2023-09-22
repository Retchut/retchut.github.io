<script lang="ts">
	import { theme } from "../../utils/stores";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import StyledParagraph from "../Components/Text/StyledParagraph.svelte";

	import sectionData from "../Assets/Data/About.json";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];

	const title2: string = sectionData["title2"] ?? "DefaultTitleTxt2";
	const paragraphs2: string[] = sectionData["paragraphs2"] ?? ["DefaultValue2"];
</script>

<PageSection>
	<div class="flex justify-between">
		<header class="w-1/3 text-main">
			<h1 class="title">{title}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			{#each paragraphs as content}
				<StyledParagraph {content} />
			{/each}
		</header>
		<div class="w-1/2 flex flex-col text-main">
			<div class="grow flex justify-end items-start mb-8">
				<img src="/about.jpg" alt="My portrait... again" class="w-[350px] rounded-sm" />
			</div>
			<h1 class="title">{title2}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			{#each paragraphs2 as content}
				<StyledParagraph {content} />
			{/each}
		</div>
	</div>
</PageSection>

<style>
</style>
