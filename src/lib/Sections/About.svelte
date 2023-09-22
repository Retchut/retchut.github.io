<script lang="ts">
	import { theme } from "../../utils/stores";

	import StyledParagraph from "../Components/Text/StyledParagraph.svelte";

	import sectionData from "../Assets/Data/About.json";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];
</script>

<section class="h-screen flex items-center">
	<div class="mx-auto p-8 w-[1300px] h-[70vh] flex justify-between">
		<header class="w-1/3 text-main">
			<h1 class="title">{title}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			{#each paragraphs as content}
				<StyledParagraph {content} />
			{/each}
		</header>
		<div class="w-1/2 flex flex-col">
			<div class="grow flex justify-end items-start">
				<img src="/about.jpg" alt="My portrait... again" class="w-[350px] rounded-sm" />
			</div>
			<h1 class="title text-main">Something else</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			<p class="text-main">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</section>

<style>
</style>
