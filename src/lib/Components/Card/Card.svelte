<script lang="ts">
	import { theme } from "../../../utils/stores";

	import "../../../utils/testThemes.css";

	export let data = { title: "title", content: "content" };
	const { title, content } = data;

	let themeVal: number;
	theme.subscribe((value) => {
		themeVal = value;
	});
</script>

<article class="btntheme{themeVal} border-2">
	<h3 class="subtitle text-scheme1background hover:textaccenttheme{themeVal}">{title}</h3>
	<h4 class="main-text text-scheme1background hover:textaccenttheme{themeVal}">{content}</h4>
</article>
