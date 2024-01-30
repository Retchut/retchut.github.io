<!--
@component
	This component is the webpage's Hero section.
-->
<script lang="ts">
	// imports
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Button from "../Components/Button/Button.svelte";

	import sectionData from "../Assets/Data/Hero.json";
	import { scrollToSection } from "../../utils/scrolling";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const subtitle: string = sectionData["subtitle"] ?? "DefaultSubtitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contact: string = sectionData["contact"] ?? "ContactBtnTxt";
</script>

<PageSection heroSection={true}>
	<header
		class="px-4 w-screen mx-auto sm:ml-14 md:w-[640px] z-10 flex flex-col justify-center text-main"
	>
		<TextGroup {title} {subtitle} {paragraphs} />
		<Button class="w-fit px-6 py-4 mt-4" text={contact} action={() => scrollToSection(4)} />
	</header>
	<img
		src="/profile.jpg"
		alt="My portrait"
		class="absolute right-10 sm:right-36 md:-right-4 z-0 max-h-[300px] sm:max-h-[450px] md:max-h-[600px] rounded-sm"
	/>
</PageSection>

<style>
</style>
