<script lang="ts">
	import { handleScroll } from "../../../utils/scrollToSection";
	import { theme } from "../../../utils/stores";

	import "../../../utils/testThemes.css";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<aside class="fixed bottom-4 right-4 flex flex-col">
	{#each [0, 1] as section}
		<button
			class="btntheme{themeVal}  my-1 rounded-full border-[1px] py-1 px-2"
			on:click={() => handleScroll(section)}>{section}</button
		>
	{/each}
</aside>
