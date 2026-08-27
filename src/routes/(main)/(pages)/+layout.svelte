<script lang="ts">
	let { children } = $props()
</script>

<div
	class="mx-auto flex min-h-screen w-[90%] flex-col justify-center py-24 md:w-[60%]"
>
	{@render children()}
</div>
