<!--
@component
	This component is the webpage's Contacts section.
-->
<script lang="ts">
	import { theme } from "../../utils/stores";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Button from "../Components/Button/Button.svelte";

	import sectionData from "../Assets/Data/Contact.json";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	// const subtitle: string = sectionData["subtitle"] ?? "DefaultSubtitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contactBtnTxt: string = sectionData["buttonText"] ?? "ContactBtnTxt";

	const boxStyling = "absolute w-full h-full border-4 color-fade-anim";
</script>

<PageSection>
	<div class="text-white flex flex-col relative">
		<header>
			<TextGroup {title} {paragraphs} align="center" />
		</header>
		<Button
			class="mx-auto my-4 p-4"
			text={contactBtnTxt}
			action={() => (window.location.href = "mailto:mariotravassosdev@protonmail.com")}
		/>
		<div class="absolute inset-0 m-auto w-2/3 h-[60vh]">
			<div class="{boxStyling} -inset-4 border-accent{themeVal}"></div>
			<div class="{boxStyling} inset-4 border-accent{(themeVal + 1) % 4}"></div>
		</div>
	</div>
</PageSection>

<style>
</style>
