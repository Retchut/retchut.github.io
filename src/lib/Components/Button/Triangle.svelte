<script lang="ts">
	import { theme, websiteSection } from "../../../utils/stores";

	import { handleScroll } from "../../../utils/scrollToSection";

	export let section: number = 0;

	let themeVal!: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	let selected: boolean = false;
	websiteSection.subscribe((value) => {
		selected = value === section;
	});
</script>

<button
	class:rotate={selected}
	class="relative my-2 w-8 h-8 overflow-visible"
	on:click={() => handleScroll(section)}
>
	<div class="absolute outer border-b-accent{themeVal}"></div>
	<div class="absolute inner border-b-background2"></div>
</button>

<style>
	.rotate {
		transition: 0.1s ease-in;
		transform: rotate(180deg);
	}

	.outer {
		top: 5px;
		left: 3px;
		@apply border-solid border-x-transparent;
		border-width: 0px 13px 21px;
	}

	.inner {
		top: 9px;
		left: 8px;
		@apply border-solid border-x-transparent;
		border-width: 0px 8px 15px;
	}
</style>
