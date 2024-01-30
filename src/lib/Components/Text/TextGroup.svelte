<!--
@component
	This component consists of a text group.
	It consists of, a title, subtitle, separator and paragraphs, rendered in this order.

		@param title - string - title of the group (optional)
		@param subtitle - string - subtitle of the group (optional)
		@param paragraphs - string[] - array of paragraph strings to be rendered below the separator
		@param showBar - boolean - true if the bar is supposed to be shown. true by default
		@param titleSize - string - possible values: "xs", "sm", "base", "lg", "xl", "(2-9)xl". Defaults to 6xl if no value, or an incorrect value was provided.
		@param align - string - possible values: "left", "right", "center". Defaults to left if no value, or an incorrect value were provided.
		@param titlePadding - boolean - set to false to remove the title padding. true by default
		@param subtitlePadding - boolean - set to false to remove the subtitle padding. true by default
		@param paragraphsPadding - boolean - set to false to remove the paragraphs padding. true by default
		@param paragraphBullets - boolean - true if the paragraphs are bulleted. false by default
		@param blendTitle - boolean - true if the title text will be blended with the background. false by default
-->
<script lang="ts">
	// imports
	import StyledParagraph from "../../Components/Text/StyledParagraph.svelte";

	import { theme } from "../../../utils/stores";

	// props
	export let title: string = "";
	export let subtitle: string = "";
	export let paragraphs: string[] = [];
	export let showBar: boolean = true;
	export let titleSize: string = "6xl";
	export let align: string = "left";
	export let titlePadding: boolean = true;
	export let subtitlePadding: boolean = true;
	export let paragraphsPadding: boolean = true;
	export let paragraphBullets: boolean = false;
	export let blendTitle: boolean = false;

	// component code
	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	if (titleSize.match(/^(xs|sm|base|lg|[2-9]?xl)$/g) === null) titleSize = "6xl";

	if (!["left", "center", "right"].includes(align)) align = "left";

	if ([title, subtitle].every((v) => v === "") && paragraphs.length === 0)
		console.warn("empty TextGroup");
</script>

{#if title !== ""}
	<h1 class="text-{titleSize} {titlePadding && 'pb-4'} text-{align} {blendTitle && 'blend-text'}">
		{title}
	</h1>
{/if}

{#if subtitle !== ""}
	<h2 class="text-xl {subtitlePadding && 'pb-6'} text-{align}">
		{subtitle}
	</h2>
{/if}

{#if showBar}
	<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-6 color-fade-anim bar-{align}" />
{/if}

{#if paragraphs.length !== 0}
	{#each paragraphs as content}
		<StyledParagraph
			bulletted={paragraphBullets}
			{content}
			{align}
			bottomPadding={paragraphsPadding}
		/>
	{/each}
{/if}

<style>
	.bar-left {
		margin-right: auto;
	}

	.bar-center {
		margin-left: auto;
		margin-right: auto;
	}

	.bar-right {
		margin-left: auto;
	}

	.blend-text {
		mix-blend-mode: difference;
		/* mix-blend-mode: exclusion; */
	}
</style>
