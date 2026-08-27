<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import videoFile from "$lib/assets/videos/intro.mp4"
	import thumb from "$lib/assets/images/thumb.jpg"
	import { onMount } from "svelte"
	import { withLocalePath } from "$lib/utils/withLocalePath"

	let { data } = $props()

	let videoEl: HTMLVideoElement | undefined = $state()

	onMount(() => {
		if (videoEl) {
			videoEl.addEventListener("timeupdate", (e) => {
				const el = e.currentTarget as HTMLVideoElement

				if (el.currentTime >= 7.6) {
					el.style.opacity = "0.3"
					el.style.filter = "blur(5px)"
					el.pause()
				}
			})
		}
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
</svelte:head>

<!-- HERO -->
<section
	class="relative isolate flex min-h-[calc(100dvh-73px)] items-center overflow-hidden"
>
	<!-- VIDEO -->
	<video
		bind:this={videoEl}
		class="absolute inset-0 h-full w-full object-cover object-center transition-[opacity,filter] duration-500 ease-out"
		autoplay
		muted
		poster={thumb}
		playsinline
		preload="metadata"
		aria-hidden="true"
	>
		<source
			src={videoFile}
			type="video/mp4"
		/>
	</video>

	<!-- OVERLAY -->
	<div class="absolute inset-0 bg-[#0d0e11]/70"></div>

	<!-- HERO CONTENT -->
	<div
		class="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-5 py-20 text-center text-white sm:px-6 sm:py-24 lg:px-8"
	>
		<p
			class="mb-2 text-xs font-light tracking-[0.22em] text-white/65 uppercase sm:mb-3 sm:text-sm md:text-base md:tracking-[0.28em]"
		>
			{m["hero.title.pre"]()}
		</p>

		<h1
			class="text-4xl leading-none font-bold tracking-[0.04em] uppercase sm:text-5xl md:text-6xl lg:text-7xl"
		>
			{m["hero.title.highlight"]()}
		</h1>

		<p
			class="mt-4 text-lg font-light text-white/70 sm:mt-5 sm:text-xl md:text-2xl"
		>
			{m["hero.title.post"]()}
		</p>

		<p
			class="mx-auto mt-6 max-w-md text-[1.4rem] leading-7 font-normal text-white/60 sm:mt-7 sm:max-w-xl sm:text-lg sm:leading-8 md:text-xl"
		>
			{@html m["hero.description.pre"]({
				highlight: `
			<strong
				class="
					font-semibold
					bg-linear-to-b
					from-white
					to-[#bdbdbd]
					bg-clip-text
					text-transparent
				"
			>
				${m["hero.description.highlight"]()}
			</strong>
		`
			})}
		</p>

		<a
			href={withLocalePath("/contact")}
			class="mt-7 rounded-xl bg-gray-50 px-5 py-2.5 text-base text-black transition-all duration-300 hover:bg-gray-300 sm:mt-8 sm:px-6 sm:py-3 sm:text-lg"
		>
			{m["common.contact"]()}
		</a>
	</div>
</section>
