<script lang="ts" ?>
	import { theme } from "../../../utils/stores";

	import "../../../utils/testThemes.css";
	import Button from "../Button/Button.svelte";

	// class is a reserved keyword so we need this little workaround
	let className: string;
	export { className as class };
	export let action: any = console.log("No action specified");
	export let text: string = "default text";

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<button class={className + ` btntheme${themeVal} border-2 rounded-full fade-anim`} on:click={action}
	>{text}</button
>

<style>
</style>
