<script lang="ts">
	import { Footer } from "$lib/components/footer"
	import { Header } from "$lib/components/header"

	let { children } = $props()
</script>

<div class="flex min-h-dvh flex-col bg-[#0d0e11] antialiased">
	<Header />
	<main class="flex-1 pt-18.25">
		{@render children?.()}
	</main>
	<Footer />
</div>
