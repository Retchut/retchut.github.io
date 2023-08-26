<script lang="ts">
	import { theme } from "../utils/stores";

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
			<h1 class="text-6xl pb-4">{title}</h1>
			<h2 class="text-xl">{subtitle}</h2>
			<hr class="w-16 linetheme{themeVal} border-2 rounded-full my-8" />
			{#each paragraphs as content}
				<p class="text-base pb-1">{content}</p>
			{/each}
		</header>
		<button class="px-6 py-4 mt-4 rounded-full border-2 ease-in duration-200 btntheme{themeVal}"
			>{contact}</button
		>
		<img src="/profile.jpg" alt="My portrait" class="profile" />
	</div>
</section>

<style>
	.profile {
		position: absolute;
		bottom: 5%;
		right: 0px;
		z-index: 0;
		max-height: 700px;
		border-radius: 2px;
	}

	/* Color test classes below */
	.btntheme0 {
		@apply border-scheme1accent0 bg-scheme1accent0 text-scheme1background;
	}
	.btntheme0:hover {
		@apply bg-scheme1background text-scheme1accent0;
	}

	.btntheme1 {
		@apply border-scheme1accent1 bg-scheme1accent1 text-scheme1background;
	}
	.btntheme1:hover {
		@apply bg-scheme1background text-scheme1accent1;
	}

	.btntheme2 {
		@apply border-scheme1accent2 bg-scheme1accent2 text-scheme1background;
	}
	.btntheme2:hover {
		@apply bg-scheme1background text-scheme1accent2;
	}

	.btntheme3 {
		@apply border-scheme1accent3 bg-scheme1accent3 text-scheme1background;
	}
	.btntheme3:hover {
		@apply bg-scheme1background text-scheme1accent3;
	}

	.linetheme0 {
		@apply border-scheme1accent0;
	}

	.linetheme1 {
		@apply border-scheme1accent1;
	}

	.linetheme2 {
		@apply border-scheme1accent2;
	}

	.linetheme3 {
		@apply border-scheme1accent3;
	}
</style>
