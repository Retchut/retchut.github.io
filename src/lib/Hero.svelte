<script lang="ts">
	import { theme } from "../utils/stores";

	import "../utils/testThemes.css";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	const title = "Hello I'm Mário,";
	const subtitle = "I make stuff";
	const paragraphs = [
		"I am currently finishing up my master's degree, working on optimizing photo-realistic VR experiences for the web",
		"Getting my hands dirty with clockwork and game development as a hobby"
	];
	const contact = "Contact me";
</script>

<section class="relative grow flex items-center mx-auto my-12">
	<div class="w-[800px]">
		<header class="relative z-10 max-w-[400px]">
			<h1 class="title">{title}</h1>
			<h2 class="subtitle">{subtitle}</h2>
			<hr class="w-16 borderaccenttheme{themeVal} border-2 rounded-full mb-8 fade-anim" />
			{#each paragraphs as content}
				<p class="main-text">{content}</p>
			{/each}
		</header>
		<button class="px-6 py-4 mt-4 rounded-full border-2 btntheme{themeVal} fade-anim"
			>{contact}</button
		>
		<img
			src="/profile.jpg"
			alt="My portrait"
			class="absolute bottom-[5%] right-0 z-0 max-h-[700px] rounded-sm"
		/>
	</div>
</section>

<style>
</style>
