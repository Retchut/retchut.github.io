<!--
@component
	This component is the webpage's About section.
-->
<script lang="ts">
	// imports
	import type { InterestCategory } from "../../types/Interests";

	import PageSection from "../Components/Layout/PageSection.svelte";
	import TextGroup from "../Components/Text/TextGroup.svelte";

	import sectionData from "../Assets/Data/Interests.json";

	// component code
	const title: string = sectionData["title"] ?? "DefaultTitleTxt";
	const paragraphs: string[] = sectionData["paragraphs"] ?? ["DefaultValue"];

	const interestSections: InterestCategory[] = sectionData["media"] ?? [];
</script>

<PageSection screenHeight={false}>
	<div class="pt-[40%] sm:pt-[25%] md:pt-[15%] lg:pt-[12.5%] text-main">
		<header class="w-full pb-10">
			<TextGroup {title} titleSize="6xl" {paragraphs} />
		</header>

		{#each interestSections as mediaType}
			<TextGroup title={mediaType.title} titleSize="5xl" />
			<div
				class="grid grid-cols-1 px-20 md:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10"
			>
				{#each mediaType.entries as entry}
					<div class="group relative rounded-lg shadow-image shadow-accent0 h-fit overflow-hidden">
						<!-- front -->
						<div
							class="group-hover:brightness-[30%] group-hover:blur-sm duration-200 group-hover:scale-110"
						>
							<img
								class="w-full"
								src={"/interests/" + entry.imgName + ".jpg"}
								alt={entry.imgName.split("/")[1]}
							/>
						</div>
						<!-- back -->
						<div
							class="hidden group-hover:flex absolute w-full top-0 left-0 h-full flex-col justify-center px-8"
						>
							<TextGroup
								titleSize="4xl"
								title={entry.title}
								paragraphs={entry.subtitle !== ""
									? [entry["subtitle-title"] + ": " + entry.subtitle]
									: []}
								align="center"
							/>
						</div>
					</div>
				{/each}
			</div>
		{/each}
	</div>
</PageSection>

<style>
</style>
