<script lang="ts">
	import { resolve } from "$app/paths"
	import { Constants } from "$lib"
	import { onMount } from "svelte"
	import { cubicOut } from "svelte/easing"
	import { fade, fly } from "svelte/transition"

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
		if (cookieConsentStorage.value()) return

		const showDrawer = () => {
			isOpen = true
			window.removeEventListener("scroll", showDrawer)
			window.removeEventListener("touchmove", showDrawer)
		}

		window.addEventListener("scroll", showDrawer, { passive: true })
		window.addEventListener("touchmove", showDrawer, { passive: true })

		return () => {
			window.removeEventListener("scroll", showDrawer)
			window.removeEventListener("touchmove", showDrawer)
		}
	})
</script>

{#if isOpen}
	<div
		class="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
		role="dialog"
		aria-label="Cookie consent"
		transition:fade={{ duration: 180 }}
	>
		<div
			class="pointer-events-auto mx-auto flex max-w-5xl flex-col gap-5 rounded-2xl border border-white/10 bg-black p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] sm:p-6 md:flex-row md:items-center md:gap-8"
			in:fly={{ y: 40, duration: 400, easing: cubicOut }}
			out:fly={{ y: 20, duration: 250 }}
		>
			<div class="min-w-0 flex-1">
				<div class="mb-2 flex items-center gap-2.5">
					<span
						class="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-base"
						aria-hidden="true"
					>
						🍪
					</span>

					<h3 class="text-base font-semibold tracking-tight text-white">
						We use cookies
					</h3>
				</div>

				<p class="text-sm leading-6 text-white/55">
					We use cookies to improve your experience and understand how you use
					our site.
					<a
						href={resolve("/cookie-policy")}
						class="font-medium text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white"
					>
						Learn more
					</a>
				</p>
			</div>

			<div class="flex w-full shrink-0 gap-3 md:w-auto">
				<button
					type="button"
					class="flex-1 cursor-pointer rounded-xl border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/40 hover:bg-white/5 hover:text-white focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black focus:outline-none active:scale-[0.98] md:flex-none"
					onclick={decline}
				>
					Decline
				</button>

				<button
					type="button"
					class="flex-1 cursor-pointer rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black focus:outline-none active:scale-[0.98] md:flex-none"
					onclick={accept}
				>
					Accept
				</button>
			</div>
		</div>
	</div>
{/if}
