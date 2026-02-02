<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { getLocale } from "$lib/paraglide/runtime.js"
	import { Button, Text } from "@fefade-ui/svelte"
	import videoFile from "$lib/assets/video.mp4"
	import { onMount } from "svelte"

	let { data } = $props()

	let videoEl: HTMLVideoElement

	const seoData = {
		["pt-br"]: {
			title: "O impulso digital para ir mais longe",
			description:
				"Construímos a base tecnológica que o seu negócio precisa para crescer.",
			keywords:
				"desenvolvimento de software, software sob medida, fábrica de software, fefade, tecnologia, inovação, transformação digital"
		},
		en: {
			title: "The Digital Impulse to Go Further",
			description:
				"We build the technological foundation your business needs to grow.",
			keywords:
				"software development, custom software, app development, web development, ui library, fefade, technology, innovation, digital transformation"
		}
	}[getLocale()]

	onMount(() => {
		videoEl.addEventListener("timeupdate", () => {
			if (videoEl.currentTime >= 7.6) {
				videoEl.style.opacity = "0.3"
				videoEl.pause()
			}
		})
	})
</script>

<svelte:head>
	<title>{seoData.title} | {data.title}</title>
	<meta name="description" content={seoData.description} />
	<meta name="keywords" content={seoData.keywords} />
</svelte:head>

<section class="hero">
	<video bind:this={videoEl} autoplay muted playsinline class="hero-video">
		<source src={videoFile} type="video/mp4" />
	</video>

	<div class="hero-overlay"></div>

	<div class="hero-content">
		<Text
			as="h1"
			style="
			color: white;
			text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.4);
			font-weight: 800;
			font-size: 48px;
			"
		>
			{seoData.title}
		</Text>
		<Text as="p" class="muted" style="font-size: 18px;">
			{seoData.description}
		</Text>
		<Button size="lg">{m["common.cta.sign_in"]()}</Button>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: calc(100vh - 60px);
		width: 100%;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -2;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.hero-content {
		text-align: center;
		z-index: 1;
	}

	@media screen and (max-width: 768px) {
		.hero-content {
			width: 80%;
		}
	}
</style>
