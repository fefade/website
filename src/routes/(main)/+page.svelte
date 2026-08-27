<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import videoFile from "$lib/assets/videos/intro.mp4"
	import thumb from "$lib/assets/images/thumb.jpg"
	import { onMount } from "svelte"
	import { withLocalePath } from "$lib/utils/withLocalePath"

	let { data } = $props()

	let shouldLoadVideo = $state(false)

	function handleTimeUpdate(event: Event) {
		const video = event.currentTarget as HTMLVideoElement

		if (video.currentTime >= 7.6) {
			video.pause()
			video.style.opacity = "0.3"
			video.style.filter = "blur(5px)"
		}
	}

	onMount(() => {
		shouldLoadVideo = window.matchMedia("(min-width: 768px)").matches
	})
</script>

<svelte:head>
	<title>{data.title}</title>

	<meta
		name="description"
		content={m["metadata.description"]()}
	/>

	<meta
		name="keywords"
		content={m["metadata.keywords"]()}
	/>

	<link
		rel="preload"
		as="image"
		href={thumb}
		fetchpriority="high"
	/>
</svelte:head>

<!-- HERO -->
<section
	class="relative isolate flex min-h-[calc(100dvh-73px)] items-center overflow-hidden"
>
	<!-- VIDEO -->
	{#if shouldLoadVideo}
		<video
			class="absolute inset-0 h-full w-full object-cover object-center transition-[opacity,filter] duration-500 ease-out"
			autoplay
			muted
			poster={thumb}
			playsinline
			preload="metadata"
			aria-hidden="true"
			ontimeupdate={handleTimeUpdate}
		>
			<source
				src={videoFile}
				type="video/mp4"
			/>
		</video>
	{/if}

	<!-- OVERLAY -->
	<div class="absolute inset-0 bg-[#0d0e11]/70"></div>

	<!-- HERO CONTENT -->
	<div
		class="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 py-16 text-center text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
	>
		<!-- EYEBROW -->
		<p
			class="mb-3 text-sm leading-5 font-light tracking-[0.16em] text-[#cfcfcf] uppercase sm:mb-3 sm:text-base md:text-lg md:tracking-[0.2em]"
		>
			{m["hero.title.pre"]()}
		</p>

		<!-- TITLE -->
		<h1
			class="max-w-4xl text-[clamp(2.125rem,7vw,4.5rem)] leading-[0.98] font-bold tracking-[0.035em] text-white uppercase"
		>
			{m["hero.title.highlight"]()}
		</h1>

		<!-- SUBTITLE -->
		<p
			class="mt-3 text-[clamp(1rem,2.5vw,1.5rem)] leading-6 font-light text-[#d6d6d6] sm:mt-4 sm:leading-7"
		>
			{m["hero.title.post"]()}
		</p>

		<!-- DESCRIPTION -->
		<p
			class="mx-auto mt-5 max-w-100 text-[clamp(0.9375rem,2vw,1.1875rem)] leading-6 font-normal text-[#c8c8c8] sm:mt-6 sm:leading-7"
		>
			{@html m["hero.description.pre"]({
				highlight: `
			<strong class="font-semibold text-white">
				${m["hero.description.highlight"]()}
			</strong>
		`
			})}
		</p>

		<!-- CTA -->
		<a
			href={withLocalePath("/contact")}
			class="mt-6 rounded-xl bg-gray-50 px-5 py-2.5 text-[15px] leading-5 font-medium text-black transition-all duration-300 hover:bg-gray-300 sm:mt-7 sm:px-6 sm:py-3 sm:text-base"
		>
			{m["common.contact"]()}
		</a>
	</div>
</section>
