<script lang="ts">
	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";
	import Button from "../Components/Button/Button.svelte";

	import sectionData from "../Assets/Data/Hero.json";

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const subtitle: string = sectionData["subtitle"] ?? "DefaultSubtitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contact: string = sectionData["contact"] ?? "ContactBtnTxt";
</script>

<PageSection heroSection={true}>
	<header class="ml-28 z-10 max-w-[400px] flex flex-col text-main">
		<TextGroup {title} {subtitle} {paragraphs} />
		<Button
			class="w-fit px-6 py-4 mt-4"
			text={contact}
			action={() => console.warn("TODO: head to contact page")}
		/>
	</header>
	<img
		src="/profile.jpg"
		alt="My portrait"
		class="absolute bottom-24 right-12 z-0 max-h-[600px] rounded-sm"
	/>
</PageSection>

<style>
</style>
