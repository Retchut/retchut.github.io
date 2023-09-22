<!--
@component
This component consists of a generic button.
It is styled by default to be consistent with the page's appearance, but some of these styles can be overridden.

	@param class - string - external styling - generally margins, paddings, etc. As class is a reserved keyword, this parameter is refered to as classParam inside this component.
	@param action - () => void - action to be performed on button click.
	@param text - string - button text
	@param overrideTheme - boolean - true if the button ignores the current theme of the webpage. false by default
-->
<script lang="ts" ?>
	import { theme } from "../../../utils/stores";

	// class is a reserved keyword so we need this little workaround
	let classParam: string = "";
	export { classParam as class };
	export let action: () => void = () => console.log("No action specified");
	export let text: string = "default text";
	export let overrideTheme: boolean = false;

	let themeVal!: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	$: className =
		classParam +
		` rounded-full color-fade-anim text-background hover:text-accent${themeVal}` +
		(overrideTheme
			? ""
			: ` border-2 border-accent${themeVal} bg-accent${themeVal} hover:bg-transparent`);
</script>

<button class={className} on:click={action}>{text}</button>

<style>
</style>
