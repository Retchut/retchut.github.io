<!--
@component
	This component consists of a Project Tag.
    It will be styled just like any other element in the page, with the caveat that its color is dependent on the currently applied theme.
    If the Tag represents the area of the project (more important info), its background color will be the next theme after the currently applied one.
    If the Tag represents a technology used in the project, its background color will be the second next theme, after the currently applied one

		@param content - string - content to be shown inside the tag
		@param isTech - boolean - true if the Tag represents a technology. false by default
-->
<script lang="ts">
	import { theme } from "../../../utils/stores";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	export let content: string = "DefaultTag";
	export let isTech: boolean = false;
</script>

<p
	class="mx-1 px-2 py-1 border-background2 border-2 rounded-full color-fade-anim text-background {isTech
		? `bg-accent${(themeVal + 2) % 4}`
		: `bg-accent${(themeVal + 1) % 4}`}"
>
	{content}
</p>
