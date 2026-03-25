<script lang="ts">
	import { Constants } from "$lib"
	import { onMount, type Snippet } from "svelte"

	interface Props {
		id: string
		children: Snippet<[() => void]>
	}

	let { id, children }: Props = $props()

	function loadGA() {
		const script = document.createElement("script")
		script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
		script.async = true
		document.head.appendChild(script)

		script.onload = () => {
			;(window as any).dataLayer = (window as any).dataLayer || []
			function gtag(...args: any[]) {
				;(window as any).dataLayer.push(args)
			}
			gtag("js", new Date())
			gtag("config", id)
		}
	}

	onMount(() => {
		if (Constants.COOKIE_CONSENT_FROM_STORAGE.accepted()) {
			loadGA()
		}
	})
</script>

{@render children(loadGA)}
