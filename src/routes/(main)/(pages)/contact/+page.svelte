<script lang="ts">
	import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public"
	import { m } from "$lib/paraglide/messages.js"
	import { Constants } from "@fefade/common"

	let { data } = $props()

	let isLoading = $state(false)
	let messageError: string | undefined = $state()
	let sent = $state(false)

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault()

		const form = event.currentTarget as HTMLFormElement
		const formData = new FormData(form)

		const email = formData.get("email")?.toString() ?? ""
		const name = formData.get("name")?.toString() ?? ""
		const message = formData.get("message")?.toString() ?? ""
		const token = formData.get("cf-turnstile-response")?.toString()

		try {
			isLoading = true

			if (!email || !name || !message) {
				throw new Error("Fill in the required fields")
			}

			if (!token) {
				throw new Error("Invalid captcha")
			}

			const response = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					email,
					name,
					message,
					"cf-turnstile-response": token
				})
			})

			if (!response.ok) {
				const { error } = await response.json()
				throw new Error(error)
			}

			sent = true
			messageError = undefined
		} catch (error) {
			sent = false
			messageError = (error as Error).message
		} finally {
			form.reset()
			isLoading = false
		}
	}
</script>

<svelte:head>
	<title>{m["pages.contact.title"]()} | {data.title}</title>

	<meta
		name="description"
		content={m["pages.contact.introduction"]()}
	/>

	<link
		rel="preconnect"
		href="https://challenges.cloudflare.com"
	/>

	<script
		src="https://challenges.cloudflare.com/turnstile/v0/api.js"
		async
		defer
	></script>
</svelte:head>

<div class="mx-auto max-w-6xl">
	<div
		class="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-black/40 lg:grid-cols-[0.85fr_1.15fr]"
	>
		<!-- Information -->
		<section
			class="relative flex flex-col justify-between overflow-hidden border-b border-white/10 p-6 sm:p-8 lg:border-r lg:border-b-0 lg:p-10"
		>
			<!-- Decorative glow -->
			<!-- <div
				class="pointer-events-none absolute -top-24 -left-24 size-64 rounded-full bg-white/[0.04] blur-3xl"
			></div> -->

			<div class="relative">
				<div
					class="mb-6 inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.7"
						class="size-5 text-white"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615A2.25 2.25 0 0 1 2.25 6.993V6.75"
						/>
					</svg>
				</div>

				<h1
					class="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
				>
					{m["pages.contact.title"]()}
				</h1>

				<p class="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
					{m["pages.contact.introduction"]()}
				</p>
			</div>

			<div class="relative mt-10 space-y-7">
				<div>
					<p class="text-sm font-medium text-white">
						{m["pages.contact.section_one.title"]()}
					</p>

					<p class="mt-1.5 text-sm leading-6 text-white/45">
						{m["pages.contact.section_one.description"]()}
					</p>
				</div>

				<div>
					<p class="text-sm font-medium text-white">
						{m["pages.contact.section_two.title"]()}
					</p>

					<p class="mt-1.5 text-sm leading-6 text-white/45">
						{@html m["pages.contact.section_two.description"]({
							email: `<a title="email" class="text-white underline decoration-white/20 underline-offset-4 transition hover:decoration-white" href=${Constants.URLS.email}>${Constants.SUPPORT_EMAIL}</a>`
						})}
					</p>
				</div>
			</div>
		</section>

		<!-- Form -->
		<form
			class="flex flex-col gap-5 bg-black/20 p-6 sm:p-8 lg:p-10"
			onsubmit={handleSubmit}
			autocomplete="off"
			novalidate
		>
			{#if messageError}
				<div
					role="alert"
					class="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-400"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						class="mt-0.5 size-4 shrink-0"
						aria-hidden="true"
					>
						<circle
							cx="12"
							cy="12"
							r="9"
						/>
						<path
							stroke-linecap="round"
							d="M12 8v4M12 16h.01"
						/>
					</svg>

					<span>{messageError}</span>
				</div>
			{:else if sent}
				<div
					role="status"
					class="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.8"
						class="mt-0.5 size-4 shrink-0"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m5 12 4 4L19 6"
						/>
					</svg>

					<span>{m["pages.contact.sent"]()}</span>
				</div>
			{/if}

			<div class="grid gap-5 sm:grid-cols-2">
				<div class="flex flex-col gap-2">
					<label
						for="name"
						class="text-xs font-medium tracking-wider text-white/50 uppercase"
					>
						{m["common.name"]()}
					</label>

					<input
						id="name"
						name="name"
						type="text"
						required
						class="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white transition-all outline-none placeholder:text-white/20 hover:border-white/20 hover:bg-white/[0.05] focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/[0.04]"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label
						for="email"
						class="text-xs font-medium tracking-wider text-white/50 uppercase"
					>
						Email
					</label>

					<input
						id="email"
						name="email"
						type="email"
						required
						class="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white transition-all outline-none placeholder:text-white/20 hover:border-white/20 hover:bg-white/[0.05] focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/[0.04]"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<label
					for="message"
					class="text-xs font-medium tracking-wider text-white/50 uppercase"
				>
					{m["common.message"]()}
				</label>

				<textarea
					id="message"
					name="message"
					required
					class="min-h-40 w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white transition-all outline-none placeholder:text-white/20 hover:border-white/20 hover:bg-white/[0.05] focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/[0.04]"
				></textarea>
			</div>

			<div class="overflow-hidden rounded-xl">
				<div
					class="cf-turnstile"
					data-sitekey={PUBLIC_TURNSTILE_SITE_KEY}
					data-theme="dark"
					data-size="normal"
				></div>
			</div>

			<button
				type="submit"
				disabled={isLoading}
				class="group mt-1 inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-white/90 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-40"
			>
				{#if isLoading}
					<span
						class="size-4 animate-spin rounded-full border-2 border-black/30 border-t-black"
						aria-hidden="true"
					></span>
				{:else}
					<span>{m["common.cta.send"]()}</span>

					<svg
						viewBox="0 0 20 20"
						fill="none"
						class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
						aria-hidden="true"
					>
						<path
							d="M3.5 10h13M11 5.5 15.5 10 11 14.5"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/if}
			</button>
		</form>
	</div>
</div>
