<script lang="ts">
	import { theme } from "../../utils/stores";

	import Card from "../Components/Card/Card.svelte";
	import Paragraph from "../Components/Text/Paragraph.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title = "About me";
	const paragraphs = [
		"My name is Mário Travassos, an aspiring Software Developer from Portugal. I'm deeply interested in **Game Design**, **Game Development** and **Web Development**.",
		"When I'm not studying or working in the aforementioned areas, you may find me reparing and/or tinkering with electronics and clockwork, automating simple tasks I could have done myself by hand in 30 seconds, playing video games or trading card games, or consuming all kinds of media.",
		"I'm currently attending the 2nd year of a Master's Degree in Informatics and Computer Engineering at FEUP, working on my thesis focused on **optimizing photo-realistic VR experiences for the web**.",
		"I am also the current President of the **Nucleus of Computer Graphics and  Multimedia (NCGM)** of FEUP, a youth association focused on Computer Graphics, Human-Computer Interaction and Game Development. We host a multitude of events, but our biggest one is the Game Dev Meet @Porto."
	];
	const title2 = "Skillset";
	const cards = [
		{ title: "Front-End", content: "React, Svelte, Tailwind, Bootstrap" },
		{ title: "Back-end", content: "" },
		{ title: "Computer Graphics", content: "" },
		{ title: "Game Development", content: "" }
	];
</script>

<section class="h-screen flex items-center">
	<div class="mx-auto p-8 w-[1300px] h-[70vh] flex justify-between">
		<header class="w-1/3 text-main">
			<h1 class="title">{title}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			{#each paragraphs as content}
				<Paragraph {content} />
			{/each}
		</header>
		<div class="w-1/2 flex flex-col">
			<div class="grow flex justify-end items-start">
				<img src="/about.jpg" alt="My portrait... again" class="w-[350px] rounded-sm" />
			</div>
			<h1 class="title text-main">{title2}</h1>
			<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-8 fade-anim" />
			<div class="grid grid-cols-4">
				{#each cards as data}
					<Card {data} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
</style>
