<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import videoFile from "$lib/assets/videos/intro.mp4"
	import { onMount } from "svelte"
	import { Button, Link } from "@fefade-ui/svelte"
	import { withLocalePath } from "$lib/utils/withLocalePath"

	let { data } = $props()

	let videoEl: HTMLVideoElement | undefined = $state()

	onMount(() => {
		if (videoEl) {
			videoEl.addEventListener("timeupdate", (e) => {
				const el = e.currentTarget as HTMLVideoElement

				if (el.currentTime >= 7.6) {
					el.style.opacity = "0.3"
					el.pause()
				}
			})
		}
	})
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={m["metadata.description"]()} />
	<meta name="keywords" content={m["metadata.keywords"]()} />
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
			{m["hero.title.pre"]()}
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
			{m["hero.title.highlight"]()}
		</h1>

		<span
			style="
			font-size: 1.6rem;
			font-weight: 300;
			color: #cfcfcf;
			"
		>
			{m["hero.title.post"]()}
		</span>

		<p
			class="muted"
			style="
			font-size: 1.4rem;
			font-weight: 400;
			"
		>
			{m["hero.description.pre"]()}
			<span
				style="
				font-weight: 600;
				background: linear-gradient(180deg, #ffffff 0%, #bdbdbd 100%);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				"
			>
				{m["hero.description.highlight"]()}
			</span>
			{m["hero.description.middle"]()}
			<span class="post">{m["hero.description.post"]()}</span>
		</p>

		<Link href={withLocalePath("contact")} style="padding: 1rem;">
			<Button size="lg">{m["common.contact"]()}</Button>
		</Link>
	</div>
</section>

<style>
	.hero {
		position: relative;
		height: 100vh;
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

		-webkit-mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 10%,
			black 90%,
			transparent 100%
		);

		mask-image: linear-gradient(
			to right,
			transparent 0%,
			black 10%,
			black 90%,
			transparent 100%
		);
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
