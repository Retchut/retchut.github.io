<script lang="ts" ?>
	import { theme } from "../../../utils/stores";

	// class is a reserved keyword so we need this little workaround
	let classParam: string;
	export { classParam as class };
	export let action: () => void = () => console.log("No action specified");
	export let text: string = "default text";

	let themeVal!: number;
	theme.subscribe((value) => {
		themeVal = value;
	});

	$: className =
		classParam +
		` rounded-full fade-anim border-2 border-accent${themeVal} text-background hover:text-accent${themeVal} bg-accent${themeVal} hover:bg-transparent`;
</script>

<button class={className} on:click={action}>{text}</button>

<style>
</style>
