<!--
@component
	This component consists of the navigation triangle buttons.

		@param section - number - the section this item will scroll to when interacted with
-->
<script lang="ts">
	import { theme, websiteSection } from "../../../utils/stores";

	import { scrollToSection } from "../../../utils/scrolling";

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
	on:click={() => scrollToSection(section)}
>
	<div class="absolute outer border-t-accent{themeVal}"></div>
	<div class="absolute inner border-t-background2"></div>
</button>

<style>
	.rotate {
		transition: 0.1s ease-in;
		transform: rotate(180deg);
	}

	.outer {
		bottom: 5px;
		left: 3px;
		@apply border-solid border-x-transparent;
		border-width: 21px 13px 0px;
	}

	.inner {
		bottom: 9px;
		left: 8px;
		@apply border-solid border-x-transparent;
		border-width: 15px 8px 0px;
	}
</style>
