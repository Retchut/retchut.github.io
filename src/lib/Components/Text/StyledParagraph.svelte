<!--
@component
This component renders a paragraph, with text parsed to be styled according to the following specification:

- //text// - *text*
- \*\*text\*\* - **text**

	@param content - string - string to be parsed and displayed
-->
<script lang="ts">
	export let content = "Default paragraph content";
	// Note to self:
	//	sadly can't use capturing groups to make sure we capture the same start and end,
	//	as any capture group would get picked up and be spliced into the str.split return array
	// 	so we need to double check the validity over at (#1)
	const parsedParagraph = content.split(/((?:\*\*|\/\/).*?(?:\*\*|\/\/))/);
</script>

<p class="text-base pb-1">
	{#each parsedParagraph as token}
		{@const tokenStart = token.slice(0, 2)}
		{@const tokenEnd = token.slice(-2)}
		<!-- (#1) -->
		{#if tokenStart === "**" && tokenEnd === "**"}
			<span class="font-bold">{token.slice(2, -2)}</span>
		{:else if tokenStart === "//" && tokenEnd === "//"}
			<span class="italic">{token.slice(2, -2)}</span>
		{:else}
			{token}
		{/if}
	{/each}
</p>

<style>
</style>
