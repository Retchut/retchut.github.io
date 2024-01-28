<!--
@component
	This component consists of a generic page section.
	Each section takes up the whole of a page, and has similar styling when it comes to the placement of content within it.
	The content is injected using svelte's <slot> element
		
		@param heroSection - boolean - true if this section is the hero section (first) of the website. false by default
		@param screenHeight - boolean - true if this section takes up the full height of the screen. true by default
-->
<script lang="ts">
	export let heroSection: boolean = false;
	export let screenHeight: boolean = true;

	const outerClass =
		"flex justify-center items-center overflow-hidden" +
		(heroSection ? " bg-background" : "") +
		(screenHeight && " h-screen");
	const innerClass =
		"flex justify-center " +
		(heroSection
			? "mx-auto relative flex-row items-center w-auto"
			: "mx-12 2xl:mx-0 flex-col w-[1300px]");
</script>

<section class={outerClass}>
	<div class={innerClass}>
		<slot />
	</div>
</section>
