<script lang="ts">
	import { Button, Navbar } from "@fefade-ui/svelte"
	import { m } from "$lib/paraglide/messages.js"
	import { Logo } from "$lib/components/logo"
	import { Constants } from "@fefade/common"
</script>

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
		<Logo />

		<div class="flex justify-end items-center gap-2">
			<Button
				size="md"
				title={m["common.cta.sign_in"]()}
				href={Constants.ORG_NAME}
			>
				{m["common.cta.sign_in"]()}
			</Button>
		</div>
	</Navbar>
</nav>
