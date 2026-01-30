<script lang="ts">
	import {
		Link,
		Navbar,
		Select,
		Separator,
		useMediaQuery
	} from "@fefade-ui/svelte"
	import { m } from "$lib/paraglide/messages.js"
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime"
	import favicon from "$lib/assets/favicon.ico"
	import { Constants } from "@fefade-ui/core"

	const locale = getLocale()
	const isMd = useMediaQuery("max-width", "md")
</script>

{#snippet logo()}
	<Link href="/" title="logo" style="user-select: none;">
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<img
				alt="logo"
				src={favicon}
				style="
				margin: 0; 
				height: 24px; 
				width: 24px;
				"
			/>
			<!-- <span style="font-size: 1rem;">fefade</span> -->
		</div>
	</Link>
{/snippet}

{#snippet translationSelector()}
	{#if !isMd.value}
		<small title="language" class="muted">
			{m["common.language_label"]()}:
		</small>
	{/if}

	<Select
		style="min-height: 0;"
		title="language selection"
		value={locale}
		onchange={(e) => {
			const { value } = e.currentTarget
			setLocale(value as Locale)
		}}
	>
		<option value="pt-br">pt-br</option>
		<option value="en">en</option>
	</Select>
{/snippet}

<Navbar
	variant="contained"
	style="
	height: 60px;
	justify-content: space-between;
	border-radius: 0;
	padding: 1rem;
	position: sticky;
	top: 0;
	z-index: 998;
	background: {Constants.themeColorVar.bg};
	"
>
	{@render logo?.()}

	<!-- <div>
		<Navbar.Item href="#about">About</Navbar.Item>
		<Navbar.Item href="#contact">Contact</Navbar.Item>
	</div> -->

	<div
		style="
		display: flex; 
		justify-content: flex-end; 
		align-items: center; 
		gap: 0.5em;
		"
	>
		{#if !isMd.value}
			<Link href="mailto:support@fefade.com">
				<i class="fa-solid fa-envelope"></i>
			</Link>
			<Link
				href="https://play.google.com/store/apps/dev?id=7701571155946352525"
				target="_blank"
			>
				<i class="fa-brands fa-google-play"></i>
			</Link>
			<Link href="https://github.com/fefade" target="_blank">
				<i class="fa-brands fa-github"></i>
			</Link>
			<Separator orientation="vertical" style="height: 40px;" />
		{/if}

		{@render translationSelector?.()}
	</div>
</Navbar>
