<!--
@component
	This component consists of a text group.
	It consists of, at the very least, a title and separator.
	An optional subtitle can be provided as a prop, which will be rendered below the title.
	An array of paragraphs can be provided as a prop as well, which will be rendered after the separator.

		@param title - string - title of the group
		@param subtitle - string - subtitle of the group (optional)
		@param paragraphs - string[] - array of paragraph strings to be rendered below the separator
-->
<script lang="ts">
	import { theme } from "../../../utils/stores";

	import StyledParagraph from "../../Components/Text/StyledParagraph.svelte";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	export let title: string = "Default Title";
	export let subtitle: string = "";
	export let paragraphs: string[] = [];
</script>

<h1 class="text-6xl pb-4">{title}</h1>
{#if subtitle !== ""}
	<h2 class="text-xl pb-6">{subtitle}</h2>
{/if}
<hr class="w-16 border-accent{themeVal} border-2 rounded-full mb-6 color-fade-anim" />
{#if paragraphs.length !== 0}
	{#each paragraphs as content}
		<StyledParagraph {content} />
	{/each}
{/if}
