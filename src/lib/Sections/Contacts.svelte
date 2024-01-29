<!--
@component
	This component is the webpage's Contacts section.
-->
<script lang="ts">
	// imports
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Button from "../Components/Button/Button.svelte";

	import { theme } from "../../utils/stores";
	import sectionData from "../Assets/Data/Contact.json";

	// component code
	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contactBtnTxt: string = sectionData["buttonText"] ?? "ContactBtnTxt";

	const boxStyling = "absolute w-full h-full border-4 color-fade-anim";
</script>

<PageSection>
	<div class="text-white relative">
		<div class="z-10 flex flex-col relative">
			<header class="mx-auto max-w-[150px] sm:max-w-[300px] lg:max-w-none">
				<TextGroup {title} {paragraphs} align="center" />
			</header>
			<Button
				class="mx-auto my-4 p-4"
				text={contactBtnTxt}
				action={() => (window.location.href = "mailto:mariotravassosdev@protonmail.com")}
			/>
		</div>
		<div class="z-0 absolute inset-0 m-auto w-2/3 h-[60vh]">
			<div class="{boxStyling} -inset-4 border-accent{themeVal}"></div>
			<div class="{boxStyling} inset-4 border-accent{(themeVal + 1) % 4}"></div>
		</div>
	</div>
</PageSection>

<style>
</style>
