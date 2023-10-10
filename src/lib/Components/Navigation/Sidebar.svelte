<!--
@component
	This component is the webpage's navigation Sidebar.
	It contains navigation links to multiple sections of the webpage.
-->
<script lang="ts">
	import { getSections } from "../../../utils/scrollToSection";

	import Triangle from "../Button/Triangle.svelte";
</script>

<aside class="fixed bottom-4 right-4 flex flex-col">
	{#each getSections() as section}
		<Triangle {section} />
	{/each}
</aside>
