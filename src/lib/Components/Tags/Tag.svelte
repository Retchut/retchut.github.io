<!--
@component
	This component consists of a Project Tag.

		@param content - string - content to be shown inside the tag
		@param isTech - boolean - true if the Tag represents a technology. false by default
-->
<script lang="ts">
	// props
	export let content: string = "DefaultTag";
	export let isTech: boolean = false;
</script>

<p
	class="mx-1 px-2 py-1 my-1 rounded-full text-white break-keep {isTech
		? 'bg-accent2'
		: 'bg-accent1'}"
>
	{content}
</p>
