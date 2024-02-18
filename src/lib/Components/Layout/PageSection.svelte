<!--
@component
	This component consists of a generic page section.
	Each section takes up the whole of a page, and has similar styling when it comes to the placement of content within it.
	The content is injected using svelte's <slot> element
		
		@param heroSection - boolean - true if this section is the hero section (first) of the website. false by default
		@param screenHeight - boolean - true if this section takes up the full height of the screen. true by default
-->
<script lang="ts">
	// props
	export let heroSection: boolean = false;
	export let screenHeight: boolean = true;

	// component code
	const outerClass =
		"flex justify-center items-center overflow-hidden" + (heroSection ? " bg-background" : "");
	const innerClass =
		"bg-green-950 flex justify-center mx-12 2xl:mx-0 " +
		(heroSection ? "relative flex-row items-center w-auto" : "flex-col w-[80%] lg:w-[1300px]") +
		(screenHeight ? " h-screen" : "");
</script>

<section class={outerClass}>
	<div class={innerClass}>
		<slot />
	</div>
</section>
