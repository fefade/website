<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { getLocale } from "$lib/paraglide/runtime.js"
	import { Button } from "@fefade-ui/svelte"
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
			title: "The digital impulse to go further",
			description:
				"We build the technological foundation your business needs to grow.",
			keywords:
				"software development, custom software, app development, web development, ui library, fefade, technology, innovation, digital transformation"
		}
	}[getLocale()]

	const heroData = {
		"pt-br": {
			title: {
				pre: "O",
				highlight: "impulso",
				post: "digital para ir mais longe"
			},
			description: {
				pre: "Construímos a ",
				highlight: "base tecnológica",
				middle: " que o seu negócio precisa para ",
				post: "crescer."
			}
		},
		en: {
			title: {
				pre: "The digital",
				highlight: "impulse",
				post: "to go further"
			},
			description: {
				pre: "We build the ",
				highlight: "technological foundation",
				middle: " your business needs to ",
				post: "grow."
			}
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
		<span
			class="muted"
			style="
			font-size: 1.6rem;
			font-weight: 400;
			letter-spacing: 3px;
			text-transform: uppercase;
			"
		>
			{heroData.title.pre}
		</span>

		<h1
			style="
			font-size: 3.8rem;
			font-weight: 800;
			letter-spacing: 5px;
			text-transform: uppercase;
			background: linear-gradient(180deg, #ffffff 0%, #bdbdbd 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			margin: 0.5rem 0;
			"
		>
			{heroData.title.highlight}
		</h1>

		<span
			style="
			font-size: 1.6rem;
			font-weight: 300;
			color: #cfcfcf;
			"
		>
			{heroData.title.post}
		</span>

		<p
			class="muted"
			style="
			font-size: 1.4rem;
			font-weight: 400;
			"
		>
			{heroData.description.pre}
			<span
				style="
				font-weight: 600;
				background: linear-gradient(180deg, #ffffff 0%, #bdbdbd 100%);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				"
			>
				{heroData.description.highlight}
			</span>
			{heroData.description.middle}
			<span class="post">{heroData.description.post}</span>
		</p>
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
		transition: opacity 0.5s ease-out;
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
		max-width: 325px;
	}

	@media screen and (max-width: 768px) {
		.hero-content {
			width: 80%;
		}

		.hero-content h1 {
			font-size: 2.8rem !important;
		}
	}
</style>
