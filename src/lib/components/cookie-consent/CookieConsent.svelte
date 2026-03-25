<script lang="ts">
	import { Constants } from "$lib"
	import { Button, Drawer } from "@fefade-ui/svelte"
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

<Drawer {isOpen} position="bottom" style="padding: 0;">
	<Drawer.Header style="justify-content: flex-start;">
		<strong>🍪 We use cookies</strong>
	</Drawer.Header>
	<Drawer.Content>
		<p>
			We use cookies to enhance your experience. By continuing to visit this
			site you agree to our use of cookies.
		</p>
		<div
			style="display: flex; justify-content: flex-end; gap: 0.5rem; align-items: baseline;"
		>
			<Button variant="outlined" onclick={decline}>Decline</Button>
			<Button onclick={accept}>Accept</Button>
		</div>
	</Drawer.Content>
</Drawer>
