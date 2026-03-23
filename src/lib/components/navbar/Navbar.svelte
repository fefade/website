<script lang="ts">
	import { Button, Link, Navbar } from "@fefade-ui/svelte"
	import { m } from "$lib/paraglide/messages.js"
	import icon180 from "$lib/assets/images/icon-180.png?enhanced"
	import { withLocalePath } from "$lib/utils/withLocalePath"
</script>

{#snippet logo()}
	<Link
		href={withLocalePath("/")}
		title="fefade"
		style="
		user-select: none; 
		line-height: normal;
		"
	>
		<enhanced:img alt="logo" src={icon180} width="48" height="48" />
		<span class="hidden md:block" style="font-size: 20px; font-weight: 400;">
			fefade
		</span>
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

		<div class="flex justify-end items-center gap-2">
			<Button
				size="md"
				title={m["common.cta.sign_in"]()}
				href="https://auth.fefade.com"
			>
				{m["common.cta.sign_in"]()}
			</Button>
		</div>
	</Navbar>
</nav>
