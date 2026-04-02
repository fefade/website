<script lang="ts">
	import { resolve } from "$app/paths"
	import { Constants } from "$lib"
	import { Button, Drawer, Link } from "@fefade-ui/svelte"
	import { onMount } from "svelte"

	interface Props {
		onDecline?: () => void
		onAccept?: () => void
	}

	let { onDecline, onAccept }: Props = $props()

	let isOpen = $state(false)

	const cookieConsentStorage = Constants.COOKIE_CONSENT_FROM_STORAGE

	function decline() {
		cookieConsentStorage.decline()
		isOpen = false
		onDecline?.()
	}

	function accept() {
		cookieConsentStorage.accept()
		isOpen = false
		onAccept?.()
	}

	onMount(() => {
		if (!cookieConsentStorage.value()) {
			isOpen = true
		}
	})
</script>

<Drawer
	class="flex flex-col items-center"
	{isOpen}
	position="bottom"
	style="padding: 0;"
>
	<div
		class="flex flex-col md:flex-row gap-6 md:items-center"
		style="padding: 2rem;"
	>
		<div style="flex: 1;">
			<h3>🍪 We use cookies</h3>
			<p>
				We use cookies to enhance your experience. By continuing to visit this
				site you agree to our use of cookies. <Link
					href={resolve("/cookie-policy")}
					hover="underlineNone"
				>
					Read cookies policies.
				</Link>
			</p>
		</div>

		<div class="flex flex-col gap-4" style="flex: 1;">
			<Button variant="outlined" onclick={decline}>Decline</Button>
			<Button onclick={accept}>Accept</Button>
		</div>
	</div>
</Drawer>
