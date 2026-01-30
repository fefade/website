<script lang="ts">
	import favicon from "$lib/assets/favicon.ico"
	import { Provider } from "@fefade-ui/svelte"

	let { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://fefade.com/" />
</svelte:head>

<Provider defaultThemeMode="dark">
	{@render children?.()}
</Provider>

<style>
	@font-face {
		font-family: "Inter";
		src: url("/fonts/Inter-Regular.woff") format("woff");
		font-weight: 400;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "Inter";
		src: url("/fonts/Inter-Bold.woff") format("woff");
		font-weight: 700;
		font-style: normal;
		font-display: swap;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:global(body) {
		font-family: "Inter", sans-serif;
		line-height: 1.2;
		overflow-x: hidden;
		overflow-y: auto;
		margin: 0;
		padding: 0;
	}

	:global(p, ul) {
		line-height: 1.5;
	}
</style>
