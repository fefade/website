<script lang="ts">
	import { Footer } from "$lib/components/footer"
	import { Navbar } from "$lib/components/navbar"
	import { Separator } from "@fefade-ui/svelte"

	let { children } = $props()
</script>

<div class="flex flex-col">
	<Navbar />
	<main>
		{@render children()}
	</main>
	<Separator />
	<Footer />
</div>
