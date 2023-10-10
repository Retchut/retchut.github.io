<script lang="ts">
	import { onMount } from "svelte";
	import { get } from "svelte/store";
	import { theme } from "../../../utils/stores";

	import { addClass, removeClass } from "../../../utils/classUtils";

	export let onRight: boolean = false;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	// this is a little iffy, but we have to get the theme value separately, otherwise we'll update the previous value on every change of the themeVal, which is not intended, as an update to themeVal doesn't necessarily mean we want to reanimate the currently active gradient
	let prevThemeVal: number = get(theme);

	const animDurationMS: number = 200;

	let gradients: HTMLElement[] = [];
	let visibleGradients: boolean[] = [true, false, false, false];

	const fadeOut = (element: HTMLElement): void => {
		addClass(element, "fade-out");
		addClass(element, "opacity-0");
		removeClass(element, "fade-in");
		removeClass(element, "opacity-100");
	};

	const fadeIn = (element: HTMLElement): void => {
		addClass(element, "fade-in");
		addClass(element, "opacity-100");
		removeClass(element, "fade-out");
		removeClass(element, "opacity-0");
	};

	const updateGradients = (currentTheme: number) => {
		if (gradients.length !== 0) {
			visibleGradients[prevThemeVal] = !visibleGradients[prevThemeVal];
			visibleGradients[currentTheme] = !visibleGradients[currentTheme];
			fadeOut(gradients[prevThemeVal]);
			fadeIn(gradients[currentTheme]);
		}
		prevThemeVal = currentTheme;
	};

	onMount(() => {
		removeClass(gradients[themeVal], "opacity-0"); // unhide current theme element (they all start hidden)
	});

	// using a callback because otherwise this snippet would run whenever either the prevThemeVal or the themeVal were updated
	$: updateGradients(themeVal);
</script>

<div
	style="--anim-duration-ms:{animDurationMS};"
	bind:this={gradients[0]}
	class:fade-in={visibleGradients[0]}
	class:fade-out={!visibleGradients[0]}
	class="opacity-0 w-full h-full absolute bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent0 from-60% to-background2"
></div>

<div
	style="--anim-duration-ms:{animDurationMS};"
	bind:this={gradients[1]}
	class:fade-in={visibleGradients[1]}
	class:fade-out={!visibleGradients[1]}
	class="opacity-0 w-full h-full absolute bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent1 from-60% to-background2"
></div>

<div
	style="--anim-duration-ms:{animDurationMS};"
	bind:this={gradients[2]}
	class:fade-in={visibleGradients[2]}
	class:fade-out={!visibleGradients[2]}
	class="opacity-0 w-full h-full absolute bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent2 from-60% to-background2"
></div>

<div
	style="--anim-duration-ms:{animDurationMS};"
	bind:this={gradients[3]}
	class:fade-in={visibleGradients[3]}
	class:fade-out={!visibleGradients[3]}
	class="opacity-0 w-full h-full absolute bg-gradient-to-{onRight
		? 'l'
		: 'r'} from-accent3 from-60% to-background2"
></div>

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
		animation: toInvisible calc(var(--anim-duration-ms) * 1ms); /* other color change animations take 200ms - defined by tailwind */
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	}

	.fade-in {
		animation: toVisible calc(var(--anim-duration-ms) * 1ms); /* other color change animations take 200ms - defined by tailwind */
		transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
	}
</style>
