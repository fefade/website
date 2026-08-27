<script lang="ts">
	let { children } = $props()
</script>

<div
	class="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10"
>
	{@render children()}
</div>
