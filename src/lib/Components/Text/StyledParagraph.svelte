<!--
@component
	This component renders a paragraph, with text parsed to be styled according to the following specification:

	- //text// - *text*
	- \*\*text\*\* - **text**
	- ||label[www.example.com]|| - [label](https://www.example.com)

		@param content - string - string to be parsed and displayed
		@param align - string - possible values: "left", "right", "center". Defaults to left if no value, or an incorrect value were provided.
-->
<script lang="ts">
	export let content: string = "Default paragraph content";
	export let align: string = "left";
	if (!["left", "center", "right"].includes(align)) align = "left";

	// Note to self:
	//	sadly can't use capturing groups to make sure we capture the same start and end,
	//	as any capture group would get picked up and be spliced into the str.split return array
	// 	so we need to double check the validity over at (#1)
	const parsedParagraph = content.split(/((?:\*\*|\/\/|\|\|).*?(?:\*\*|\/\/|\|\|))/);

	const getTextLinkPair = (content: string): string[] => {
		// will generally return something in the form of [ "label", "https://www.url.to.something", "" ]
		let splitContent = content.split(/\[(.*?)\]/);

		// check if [label, url, emptystr] wasn't returned
		if (splitContent.length !== 3) return ["", ""];

		return splitContent.slice(0, 2);
	};
</script>

<p class="text-base pb-1 text-{align}">
	{#each parsedParagraph as token}
		{@const tokenStart = token.slice(0, 2)}
		{@const tokenEnd = token.slice(-2)}
		{@const content = token.slice(2, -2)}
		<!-- (#1) -->
		{#if tokenStart === "**" && tokenEnd === "**"}
			<span class="font-bold">{content}</span>
		{:else if tokenStart === "//" && tokenEnd === "//"}
			<span class="italic">{content}</span>
		{:else if tokenStart === "||" && tokenEnd === "||"}
			{@const textLinkPair = getTextLinkPair(content)}
			<a href={"https://" + textLinkPair[1]}>{textLinkPair[0]}</a>
		{:else}
			{token}
		{/if}
	{/each}
</p>

<style>
</style>
