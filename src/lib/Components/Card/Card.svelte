<script lang="ts">
	import { theme } from "../../../utils/stores";

	export let data = { title: "title", content: "content" };
	const { title, content } = data;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<article
	class="border-2 border-accent{themeVal} bg-accent{themeVal} text-background hover:bg-transparent hover:text-accent{themeVal}"
>
	<h3 class="subtitle">{title}</h3>
	<h4 class="main-text">{content}</h4>
</article>

<style>
</style>
