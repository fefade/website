<script lang="ts">
	import { page } from "$app/state"
	import { m } from "$lib/paraglide/messages"
	import { withLocalePath } from "$lib/utils/withLocalePath"
	import { Constants } from "@fefade/common"
	import icon180 from "@fefade/common/images/icon-180.png?enhanced"
	import { List as ListIcon, X as XIcon } from "svelte-bootstrap-icons"
	import { cubicOut } from "svelte/easing"
	import { fly } from "svelte/transition"

	type Path = Parameters<typeof withLocalePath>[0]
	type NavItem = {
		href: Path
		label: () => string
	}

	let isMenuOpen = $state(false)

	const currentPath = $derived(page.url.pathname)
	const navItems: NavItem[] = [
		{
			href: "/",
			label: () => m["common.home"]()
		},
		{
			href: "/contact",
			label: () => m["common.contact"]()
		}
	]

	const getNavClass = (href: Path): string => {
		const active = currentPath === withLocalePath(href)

		return active
			? "bg-white text-black hover:bg-gray-200"
			: "text-white/70 hover:bg-white/10 hover:text-white"
	}

	function handleMenu() {
		isMenuOpen = !isMenuOpen
	}

	function handleMenuClose() {
		isMenuOpen = false
	}
</script>

<header
	class="fixed inset-x-0 top-0 z-50
         border-b border-white/6
         bg-[#0d0e11]/95
         px-4 py-4
         shadow-lg shadow-black/20
         backdrop-blur-xl
         sm:px-6 lg:px-8"
>
	<div class="mx-auto w-full max-w-7xl">
		<div class="flex h-10 items-center justify-between">
			<a
				class="flex min-w-0 items-center gap-2 text-white transition-opacity duration-200 hover:opacity-80"
				href={withLocalePath("/")}
				onclick={handleMenuClose}
				title={Constants.ORG_NAME}
			>
				<enhanced:img
					alt="logo"
					src={icon180}
					width="48"
					height="48"
					class="h-9 w-9 shrink-0 sm:h-12 sm:w-12"
				/>

				<span class="hidden min-w-0 truncate text-sm font-medium sm:text-base">
					{Constants.ORG_NAME}
				</span>
			</a>

			<nav class="hidden items-center gap-2 text-sm md:flex lg:gap-3">
				{#each navItems as item (item.href)}
					<a
						href={withLocalePath(item.href)}
						class={`rounded-xl px-3.5 py-1.5 font-medium transition-all duration-200 ${getNavClass(item.href)}`}
					>
						{item.label()}
					</a>
				{/each}
			</nav>

			<div class="hidden items-center gap-2 md:flex">
				<a
					href={Constants.URLS.auth}
					class="rounded-xl bg-white px-3.5 py-1.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-300 sm:px-4"
				>
					{m["common.cta.sign_in"]()}
				</a>
			</div>

			<button
				id="menu-toggle"
				type="button"
				aria-label="Open menu"
				aria-expanded={isMenuOpen}
				class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-700 text-white transition hover:bg-white/10 md:hidden"
				onclick={handleMenu}
			>
				{#if isMenuOpen}
					<XIcon
						height="24px"
						width="24px"
					/>
				{:else}
					<ListIcon
						height="24px"
						width="24px"
					/>
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div
			id="mobile-menu"
			class="
			fixed inset-x-0 top-18 z-50
			h-[calc(100dvh-72px)]
			overflow-y-auto
			border-t border-gray-800
			bg-[#0d0e11]
			shadow-2xl shadow-black/40
			backdrop-blur-xl
			md:hidden
		"
			transition:fly={{ y: -16, duration: 300, easing: cubicOut }}
		>
			<nav
				class="
				mx-auto flex min-h-full w-full max-w-7xl
				flex-col gap-1
				px-4 py-6
				sm:px-6
			"
			>
				{#each navItems as item (item.href)}
					<a
						href={withLocalePath(item.href)}
						onclick={handleMenuClose}
						class={`rounded-xl px-3.5 py-1.5 font-medium transition-all duration-200 ${getNavClass(item.href)}`}
					>
						{item.label()}
					</a>
				{/each}

				<div
					class="mt-auto grid grid-cols-2 gap-2 border-t border-gray-800 pt-4"
				>
					<a
						href={Constants.URLS.auth}
						onclick={handleMenuClose}
						class="col-span-2 h-full rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black transition-all duration-200 hover:bg-gray-300"
					>
						{m["common.cta.sign_in"]()}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
