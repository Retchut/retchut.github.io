<!--
@component
	This component is the webpage's navigation Sidebar.
	It contains navigation links to multiple sections of the webpage.
-->
<script lang="ts">
	import { getSections, handleScroll } from "../../../utils/scrollToSection";

	import Button from "../Button/Button.svelte";
</script>

<aside class="fixed bottom-4 right-4 flex flex-col">
	{#each getSections() as section}
		<Button class="my-1 py-1 px-2" action={() => handleScroll(section)} text={section.toString()} />
	{/each}
</aside>
