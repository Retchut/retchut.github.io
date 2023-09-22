<!--
@component
This component consists of a generic page section.
Each section takes up the whole of a page, and has similar styling when it comes to the placement of content within it.
The content is injected using svelte's <slot> element
	
	@param heroSection - boolean - true if this section is the hero section (first) of the website. false by default
-->
<script lang="ts">
	export let heroSection: boolean = false;

	const outerClass =
		"h-screen flex items-center overflow-hidden" + (heroSection ? " bg-background" : "");
	const innerClass =
		"mx-auto flex flex-col justify-center h-[85vh] " +
		(heroSection ? "w-[800px] relative" : "w-[1300px]");
</script>

<section class={outerClass}>
	<div class={innerClass}>
		<slot />
	</div>
</section>
