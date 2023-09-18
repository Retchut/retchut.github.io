<script lang="ts">
	import { theme } from "../../utils/stores";

	import Card from "../Components/Card/Card.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title = "Skillset";
	const cards = [
		{
			title: ["Computer Graphics &", " Game Development"],
			technologies: ["threejs", "aframe", "unity", "godot", "blender"]
		},
		{
			title: ["Front-End", "Web Development"],
			technologies: [
				"react",
				"svelte",
				"typescript",
				"javascript",
				"tailwind",
				"bootstrap",
				"css",
				"html"
			]
		},
		{
			title: ["Back-end", "Web Development"],
			technologies: ["laravel", "php", "express", "nodejs", "mongodb", "sql", "mariadb"]
		}
	];
</script>

<section class="h-screen flex items-center">
	<div class="mx-auto p-8 w-[1300px] h-[70vh] flex flex-col">
		<header class="w-1/3 text-main">
			<h1 class="title">{title}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
		</header>
		<div class="flex justify-center">
			<div class="w-[80%] grid grid-cols-3 divide-background2 divide-x divide-y-0 relative">
				{#each cards as data, index}
					<Card frontText={data.title} backImages={data.technologies} {index} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
</style>
