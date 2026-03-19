<script lang="ts">
	import { Link, Navbar, Select, Separator } from "@fefade-ui/svelte"
	import { m } from "$lib/paraglide/messages.js"
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime"
	import icon180 from "$lib/assets/images/icon-180.png?enhanced"
	import { page } from "$app/state"

	const locale = getLocale()
	const basePrefix = locale === "en" ? "" : `/${locale}`

	function isActive(path: string) {
		return page.url.pathname === path
	}

	const NAVBAR_PATHS = [
		{ name: m["common.home"](), path: basePrefix || "/" },
		{ name: m["common.contact"](), path: "mailto:support@fefade.com" },
		{
			name: m["pages.privacy_policy.title"](),
			path: `${basePrefix}/privacy-policy`
		},
		{
			name: m["pages.cookie_policy.title"](),
			path: `${basePrefix}/cookie-policy`
		},
		{
			name: m["pages.terms_of_use.title"](),
			path: `${basePrefix}/terms-of-use`
		}
	]
</script>

{#snippet logo()}
	<Link href="/" title="logo" style="user-select: none;">
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<enhanced:img alt="logo" src={icon180} width="48" height="48" />
		</div>
	</Link>
{/snippet}

{#snippet translationSelector()}
	<span class="hidden md:block muted" title="language">
		{m["common.language_label"]()}:
	</span>

	<Select
		style="min-height: 0;"
		title="language selection"
		value={locale}
		onchange={(e) => {
			const { value } = e.currentTarget
			setLocale(value as Locale)
		}}
		selectStyle={{ "font-size": "16px" }}
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

		<div class="hidden lg:block">
			{#each NAVBAR_PATHS as { name, path } (path)}
				<Navbar.Item href={path} aria-current={isActive(path) && "page"}>
					{name}
				</Navbar.Item>
			{/each}
		</div>

		<div
			style="
			display: flex; 
			justify-content: flex-end; 
			align-items: center; 
			gap: 0.5em;
			"
		>
			<div class="items-center hidden md:flex">
				<Link href="mailto:support@fefade.com">
					<i class="fa-solid fa-envelope icon"></i>
				</Link>
				<Link
					href="https://play.google.com/store/apps/dev?id=7701571155946352525"
					target="_blank"
				>
					<i class="fa-brands fa-google-play icon"></i>
				</Link>
				<Link href="https://github.com/fefade" target="_blank">
					<i class="fa-brands fa-github icon"></i>
				</Link>
				<Separator orientation="vertical" style="height: 40px;" />
			</div>

			{@render translationSelector?.()}
		</div>
	</Navbar>
</nav>

<style>
	.icon {
		font-size: 18px;
	}
</style>
