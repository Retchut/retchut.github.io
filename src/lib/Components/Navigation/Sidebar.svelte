<script lang="ts">
	import { handleScroll } from "../../../utils/scrollToSection";

	import Button from "../Button/Button.svelte";
</script>

<aside class="fixed bottom-4 right-4 flex flex-col">
	{#each [0, 1, 2] as section}
		<Button class="my-1 py-1 px-2" action={() => handleScroll(section)} text={section.toString()} />
	{/each}
</aside>
