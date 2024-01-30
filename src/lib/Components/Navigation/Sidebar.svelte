<!--
@component
	This component is the webpage's navigation Sidebar.
	It contains navigation links to multiple sections of the webpage.
-->
<script lang="ts">
	// imports
	import Triangle from "../Button/Triangle.svelte";

	import { getSections } from "../../../utils/scrolling";
</script>

<aside class="z-30 fixed bottom-4 right-4 flex flex-col">
	{#each getSections() as section}
		<Triangle {section} />
	{/each}
</aside>
