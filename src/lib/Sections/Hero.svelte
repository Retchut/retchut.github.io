<script lang="ts">
	import { theme } from "../../utils/stores";

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

<section class="pt-12 h-screen bg-background overflow-hidden">
	<div class="mx-auto w-[800px] h-[85vh] flex items-center relative">
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
	</div>
	<div class="h-[15vh] bg-background2"></div>
</section>

<style>
</style>
