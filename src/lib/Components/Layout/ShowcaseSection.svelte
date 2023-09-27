<!--
@component
	This component consists of a page section for a showcase Page.
    These sorts of sections are comprised of a title placed on the top-left corner of the screen, and the content goes beneath it, whichever shape it may take.
    It wraps around the PageSection component, assuring consistent placement and size of the Title and remaining content.
	The content is injected using svelte's <slot> element
-->
<script lang="ts">
	import PageSection from "./PageSection.svelte";
	import TextGroup from "../Text/TextGroup.svelte";

	export let title: string = "DefaultTitle";
</script>

<PageSection>
	<div class="h-[65vh]">
		<header class=" w-full text-main">
			<TextGroup {title} />
		</header>
		<slot />
	</div>
</PageSection>
