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
-->
<script lang="ts">
	import { theme } from "../../../utils/stores";

	import StyledParagraph from "../../Components/Text/StyledParagraph.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	export let title: string = "";
	export let subtitle: string = "";
	export let paragraphs: string[] = [];
	export let showBar: boolean = true;
	export let titleSize: string = "6xl";
	if (titleSize.match(/^(xs|sm|base|lg|[2-9]?xl)$/g) === null) titleSize = "6xl";
	export let align: string = "left";
	if (!["left", "center", "right"].includes(align)) align = "left";

	if ([title, subtitle].every((v) => v === "") && paragraphs.length === 0)
		console.warn("empty TextGroup");
</script>

{#if title !== ""}
	<h1 class="text-{titleSize} pb-4 text-{align}">{title}</h1>
{/if}

{#if subtitle !== ""}
	<h2 class="text-xl pb-6 text-{align}">{subtitle}</h2>
{/if}

{#if showBar}
	<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-6 color-fade-anim bar-{align}" />
{/if}

{#if paragraphs.length !== 0}
	{#each paragraphs as content}
		<StyledParagraph {content} {align} />
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
</style>
