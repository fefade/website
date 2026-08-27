<script lang="ts">
	import { page } from "$app/state"
	import icon32 from "@fefade/common/images/icon-32.png"
	import icon180 from "@fefade/common/images/icon-180.png"
	import { CookieConsent } from "$lib/components/cookie-consent"
	import { Gtm } from "$lib/components/gtm"
	import { Constants } from "$lib"
	import "../app.css"

	let { children } = $props()
</script>

<svelte:head>
	<link
		rel="icon"
		href={icon32}
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={icon180}
	/>
	<link
		rel="canonical"
		href={page.url.href}
	/>
</svelte:head>

<Gtm id={Constants.GTM_ID}>
	{#snippet children(loadGA)}
		<CookieConsent onAccept={loadGA} />
	{/snippet}
</Gtm>

{@render children?.()}

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
