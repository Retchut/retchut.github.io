<script lang="ts">
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";

	import sectionData from "../Assets/Data/About.json";

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];

	const title2: string = sectionData["title2"] ?? "DefaultTitleTxt2";
	const paragraphs2: string[] = sectionData["paragraphs2"] ?? ["DefaultValue2"];
</script>

<PageSection>
	<div class="flex justify-between">
		<header class="w-1/3 text-main">
			<TextGroup {title} {paragraphs} />
		</header>
		<div class="w-1/2 flex flex-col text-main">
			<div class="grow flex justify-end items-start mb-8">
				<img src="/about.jpg" alt="My portrait... again" class="w-[350px] rounded-sm" />
			</div>
			<TextGroup title={title2} paragraphs={paragraphs2} />
		</div>
	</div>
</PageSection>

<style>
</style>
