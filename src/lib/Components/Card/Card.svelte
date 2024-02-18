<!--
@component
	This component consists of a card, with a front and a back, the latter of which is initially hidden and can be seen by hovering over the front.
	The front of the card consists of some paragraphs of descriptive text.
	The back of the card consists of a collection images split in 3 columns.

		@param cardData - CardData - data of the card to be displayed
-->
<script lang="ts">
	// imports
	import type { CardData } from "../../../types/Card";

	import GradientTransition from "../GradientTransition/GradientTransition.svelte";
	import TextGroup from "../Text/TextGroup.svelte";

	// props
	export let cardData: CardData = {
		frontTitle: "Default Title",
		backSubtitle: "Default subtitle",
		coverImgName: "placeholder",
		url: "www.example.com",
	};

	// component code
	// control visibility of skill face content
	// Note to self: this is done via javascript, because we cannot handle the visibility of elements
	//					which are not the subsequent siblings of another element we are hovering hover
	let hideFront: boolean = false;
	const toggleShowVisibility: () => void = () => {
		hideFront = !hideFront;
	};
</script>

<article class="flex relative color-fade-anim overflow-hidden rounded-lg h-[150px]">
	<GradientTransition toRight={false} />
	<!-- bg image -->
	<img
		class="absolute inset-0 w-full opacity-30"
		src={`./banners/${cardData.coverImgName}.jpg`}
		alt={cardData.coverImgName + " banner"}
	/>
	<header class="peer flex items-center w-full">
		<div class="w-full pl-6" class:hide-left={hideFront} class:return={!hideFront}>
			<TextGroup
				title={cardData.frontTitle}
				titlePadding={false}
				showBar={false}
				titleSize="3xl"
				align="left"
			/>
		</div>
	</header>
	<!-- back -->
	<a
		class="absolute top-0 left-0 hidden w-full h-full peer-hover:flex hover:flex flex-col justify-center px-6 fade-in-left"
		on:mouseenter={toggleShowVisibility}
		on:mouseleave={toggleShowVisibility}
		href={cardData.url}
	>
		<TextGroup
			subtitle={cardData.backSubtitle}
			subtitlePadding={false}
			showBar={false}
			align="left"
		/>
	</a>
</article>
