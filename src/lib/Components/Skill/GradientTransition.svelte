<!--
@component
	This component consists of a couple of gradients which will be transitioned between depending on the currently active theme. The only reason this exists is because no browser supports transitions between gradient states.

		@param onRight - boolean - true if the Project (parent) is on the right side of the projects grid (affects the gradients' direction)
-->
<script lang="ts">
	import { get } from "svelte/store";
	import { theme } from "../../../utils/stores";

	export let onRight: boolean = false;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	// this is a little iffy, but we have to get the theme value separately, otherwise we'll update the previous value on every change of the themeVal, which is not intended, as an update to themeVal doesn't necessarily mean we want to reanimate the currently active gradient
	let prevThemeVal: number = get(theme);
	// other color change animations take 200ms - defined by tailwind
	const animDurationMS: number = 500;

	let firstRun = true;
	let visibleGradients: boolean[] = [false, false, false, false];

	const updateGradients = (currentTheme: number) => {
		// unhide default gradient color
		if (firstRun) {
			visibleGradients[currentTheme] = true;
			firstRun = false;
			return;
		}

		visibleGradients[prevThemeVal] = !visibleGradients[prevThemeVal];
		visibleGradients[currentTheme] = !visibleGradients[currentTheme];
		prevThemeVal = currentTheme;
	};

	// using a callback in order to hide prevThemeVal from the svelte compiler
	$: updateGradients(themeVal);
</script>

{#each [0, 1, 2, 3] as t}
	<div
		style="--anim-duration-ms:{animDurationMS};"
		class:fade-in={visibleGradients[t]}
		class:opacity-100={visibleGradients[t]}
		class:fade-out={!visibleGradients[t]}
		class:opacity-0={!visibleGradients[t]}
		class="w-full h-full absolute bg-gradient-to-{onRight
			? 'l'
			: 'r'} from-accent{t} from-60% to-background2"
	></div>
{/each}

<style>
	@keyframes toInvisible {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes toVisible {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.fade-out {
		animation: toInvisible calc(var(--anim-duration-ms) * 1ms);
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	}

	.fade-in {
		animation: toVisible calc(var(--anim-duration-ms) * 1ms);
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	}
</style>
