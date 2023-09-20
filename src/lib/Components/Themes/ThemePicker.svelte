<script lang="ts">
	import { theme } from "../../../utils/stores";

	import Button from "../Button/Button.svelte";

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
