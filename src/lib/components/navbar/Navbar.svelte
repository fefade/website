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
	import icon180 from "$lib/assets/images/icon-180.png"
	import { page } from "$app/state"

	const locale = getLocale()
	const basePath = locale === "en" ? "/" : `/${locale}`
	const isMd = useMediaQuery("max-width", "md")

	function isActive(path: string) {
		return page.url.pathname === path
	}

	const NAVBAR_PATHS = [
		{ name: m["common.home"](), path: basePath },
		{ name: m["common.contact"](), path: "mailto:support@fefade.com" },
		{
			name: m["pages.privacy_policy.title"](),
			path: `${basePath}/privacy-policy`
		},
		{
			name: m["pages.cookie_policy.title"](),
			path: `${basePath}/cookie-policy`
		},
		{ name: m["pages.terms_of_use.title"](), path: `${basePath}/terms-of-use` }
	]
</script>

{#snippet logo()}
	<Link href="/" title="logo" style="user-select: none;">
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<img alt="logo" src={icon180} width="48" height="48" />
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
		<option value="pt-br" label="pt-br">pt-br</option>
		<option value="en" label="en">en</option>
	</Select>
{/snippet}

<nav>
	<Navbar
		variant="contained"
		style="
		height: 60px;
		justify-content: space-between;
		padding: 1rem;
		position: sticky;
		top: 0;
		z-index: 998;
		"
	>
		{@render logo?.()}

		{#if !isMd.value}
			<div>
				{#each NAVBAR_PATHS as { name, path } (path)}
					<Navbar.Item
						href={path}
						aria-current={isActive(path) && "page"}
						style="font-size: 13px;"
					>
						{name}
					</Navbar.Item>
				{/each}
			</div>
		{/if}

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
</nav>
