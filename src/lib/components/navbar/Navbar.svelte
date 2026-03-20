<script lang="ts">
	import { Button, Link, Navbar } from "@fefade-ui/svelte"
	import { m } from "$lib/paraglide/messages.js"
	import icon180 from "$lib/assets/images/icon-180.png?enhanced"
	import { page } from "$app/state"
	import navbarData from "$lib/data/navbarData"

	function isActive(path: string) {
		return page.url.pathname === path
	}
</script>

{#snippet logo()}
	<Link href="/" title="logo" style="user-select: none;">
		<div style="display: flex; align-items: center; gap: 0.5rem;">
			<enhanced:img alt="logo" src={icon180} width="48" height="48" />
		</div>
	</Link>
{/snippet}

<nav>
	<Navbar
		isTranslucent
		variant="text"
		style="
		height: 60px;
		justify-content: space-between;
		padding: 1rem;
		position: fixed;
		top: 0;
		z-index: 998;
		"
	>
		{@render logo?.()}

		<div class="hidden lg:block">
			{#each navbarData() as { name, path } (path)}
				<Navbar.Item
					title={name}
					href={path}
					aria-current={isActive(path) && "page"}
				>
					{name}
				</Navbar.Item>
			{/each}
		</div>

		<div class="flex justify-end items-center gap-2">
			<Button
				title={m["common.cta.sign_up"]()}
				href="https://auth.fefade.com/register"
			>
				{m["common.cta.sign_up"]()}
			</Button>
			<Button
				title={m["common.cta.sign_in"]()}
				variant="outlined"
				href="https://auth.fefade.com"
			>
				{m["common.cta.sign_in"]()}
			</Button>
		</div>
	</Navbar>
</nav>
