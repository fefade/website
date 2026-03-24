<script lang="ts">
	import { onMount } from "svelte"

	interface Props {
		id: string
		strategy?: "afterInteractive" | "lazyOnload"
	}

	let { id, strategy = "afterInteractive" }: Props = $props()

	function gtag(...args: unknown[]) {
		;(window as any).dataLayer ??= []
		;(window as any).dataLayer.push(args)
	}

	function init() {
		const s = document.createElement("script")
		s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
		s.async = true
		s.onload = () => {
			gtag("js", new Date())
			gtag("config", id)
		}
		document.head.appendChild(s)
	}

	onMount(() => {
		if (strategy === "lazyOnload") {
			if ("requestIdleCallback" in window) {
				requestIdleCallback(init)
			} else {
				setTimeout(init, 2000)
			}
		} else {
			init()
		}
	})
</script>
