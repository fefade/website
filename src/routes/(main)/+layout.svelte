<script lang="ts">
	import { Navbar } from "$lib/components/navbar"
	import type { LayoutProps } from "./$types"

	let { children }: LayoutProps = $props()
</script>

<Navbar />

<main class="layout">
	{@render children()}
</main>

<style>
	.layout {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - 60px);
		gap: 1rem;
	}
</style>
