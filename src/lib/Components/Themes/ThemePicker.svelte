<!--
@component
	This component is the webpage's Theme Picker.
	It allows changing the accent color of the webpage.
-->
<script lang="ts">
	// imports
	import Button from "../Button/Button.svelte";

	import { theme } from "../../../utils/stores";

	// component code
	const changeTheme = (newVal: number) => {
		theme.update((_value) => newVal);
	};
</script>

<aside class="fixed bottom-4 left-4 flex flex-col">
	{#each [0, 1, 2, 3] as theme}
		<Button
			class="my-1 p-3 border-2 border-background hover:border-main bg-accent{theme}"
			action={() => changeTheme(theme)}
			text={""}
			overrideTheme={true}
		/>
	{/each}
</aside>
