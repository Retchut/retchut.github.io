<!--
@component
	This component is the webpage's Contacts section.
-->
<script lang="ts">
	// imports
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Button from "../Components/Button/Button.svelte";

	import sectionData from "../Assets/Data/Contact.json";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contactBtnTxt: string = sectionData["buttonText"] ?? "ContactBtnTxt";

	const boxStyling = "absolute w-full h-full border-4";
</script>

<PageSection>
	<div class="flex h-full justify-center items-center pt-12">
		<div class="text-white h-[70%] w-[80%] p-8 relative">
			<div class="z-0 absolute inset-0 m-auto h-full w-full">
				<div class="{boxStyling} -inset-4 border-accent0"></div>
				<div class="{boxStyling} inset-4 border-accent1"></div>
			</div>
			<div class="h-full z-10 flex flex-col justify-center relative">
				<header>
					<TextGroup {title} {paragraphs} align="center" />
				</header>
				<Button
					class="mx-auto my-4 p-4"
					text={contactBtnTxt}
					action={() => (window.location.href = "mailto:mariotravassosdev@protonmail.com")}
				/>
			</div>
		</div>
	</div>
</PageSection>

<style>
</style>
