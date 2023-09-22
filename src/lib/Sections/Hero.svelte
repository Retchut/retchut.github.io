<script lang="ts">
	import { theme } from "../../utils/stores";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import Button from "../Components/Button/Button.svelte";

	import sectionData from "../Assets/Data/Hero.json";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const subtitle: string = sectionData["subtitle"] ?? "DefaultSubtitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
	const contact: string = sectionData["contact"] ?? "ContactBtnTxt";
</script>

<PageSection heroSection={true}>
	<header class="ml-28 z-10 max-w-[400px] flex flex-col text-main">
		<h1 class="title">{title}</h1>
		<h2 class="subtitle">{subtitle}</h2>
		<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
		{#each paragraphs as content}
			<p class="main-text">{content}</p>
		{/each}
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
