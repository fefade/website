<script lang="ts">
	let { children } = $props()
</script>

<div class="flex flex-col justify-center content">
	{@render children()}
</div>

<style>
	.content {
		width: 60%;
		margin: 0 auto;
		padding: 6rem 0;
		min-height: 100vh;
	}

	@media screen and (max-width: 768px) {
		.content {
			width: 90%;
		}
	}
</style>
