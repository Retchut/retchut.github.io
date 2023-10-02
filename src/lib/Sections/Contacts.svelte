<!--
@component
	This component is the webpage's Contacts section.
-->
<script lang="ts">
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";

	import sectionData from "../Assets/Data/Contact.json";
	import Button from "../Components/Button/Button.svelte";

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	// const subtitle: string = sectionData["subtitle"] ?? "DefaultSubtitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contactBtnTxt: string = sectionData["buttonText"] ?? "ContactBtnTxt";
</script>

<PageSection>
	<div class="text-white flex flex-col">
		<TextGroup {title} {paragraphs} align="center" />
		<Button
			class="mx-auto my-4 p-4"
			text="Get in touch"
			action={() => (window.location.href = "mailto:mariotravassosdev@protonmail.com")}
		/>
	</div>
</PageSection>

<style>
</style>
