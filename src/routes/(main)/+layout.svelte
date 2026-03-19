<script lang="ts">
	import { Navbar } from "$lib/components/navbar"

	let { children } = $props()
</script>

<div class="layout">
	<Navbar />
	<main class="content">
		{@render children()}
	</main>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
		min-height: calc(100vh - 60px);
		width: 90%;
		margin: 0 auto;
	}
</style>
