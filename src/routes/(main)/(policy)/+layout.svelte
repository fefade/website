<script lang="ts">
	let { children } = $props()
</script>

<div class="content">
	{@render children()}
</div>

<style>
	.content {
		width: 60%;
		margin: 3rem auto;
	}

	@media screen and (max-width: 768px) {
		.content {
			width: 90%;
		}
	}
</style>
