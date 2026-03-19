<script lang="ts">
	import { Navbar } from "$lib/components/navbar"

	let { children } = $props()
</script>

<Navbar />
<main>
	{@render children()}
</main>
