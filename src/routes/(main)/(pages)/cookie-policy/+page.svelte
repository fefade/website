<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.cookie_policy.title"]()} | {data.title}</title>
	<meta
		name="description"
		content={m["pages.cookie_policy.introduction"]()}
	/>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<header class="mb-16 border-b border-zinc-800 pb-12">
		<div
			class="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs font-medium tracking-wide text-zinc-400"
		>
			Cookies
		</div>

		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
			{m["pages.cookie_policy.title"]()}
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
			{m["pages.cookie_policy.introduction"]()}
		</p>
	</header>

	<div class="space-y-6">
		<section
			id="what-are-cookies"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.cookie_policy.whatAreCookies.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.cookie_policy.whatAreCookies.description"]()}
			</p>
		</section>

		<section
			id="why-we-use-cookies"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.cookie_policy.whyWeUseCookies.title"]()}
			</h2>

			<ul class="mt-5 space-y-4 text-zinc-400">
				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>

					<p>
						<strong class="font-medium text-zinc-200">
							{m["pages.cookie_policy.whyWeUseCookies.items.essential"]().split(
								":"
							)[0]}:
						</strong>

						{m["pages.cookie_policy.whyWeUseCookies.items.essential"]().split(
							":"
						)[1]}
					</p>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>

					<p>
						<strong class="font-medium text-zinc-200">
							{m[
								"pages.cookie_policy.whyWeUseCookies.items.performance"
							]().split(":")[0]}:
						</strong>

						{m["pages.cookie_policy.whyWeUseCookies.items.performance"]().split(
							":"
						)[1]}
					</p>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>

					<p>
						<strong class="font-medium text-zinc-200">
							{m[
								"pages.cookie_policy.whyWeUseCookies.items.functionality"
							]().split(":")[0]}:
						</strong>

						{m[
							"pages.cookie_policy.whyWeUseCookies.items.functionality"
						]().split(":")[1]}
					</p>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>

					<p>
						<strong class="font-medium text-zinc-200">
							{m["pages.cookie_policy.whyWeUseCookies.items.marketing"]().split(
								":"
							)[0]}:
						</strong>

						{m["pages.cookie_policy.whyWeUseCookies.items.marketing"]().split(
							":"
						)[1]}
					</p>
				</li>
			</ul>
		</section>

		<section
			id="control-cookies"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.cookie_policy.controlCookies.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.cookie_policy.controlCookies.description"]()}
			</p>
		</section>

		<section
			id="changes"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.cookie_policy.changes.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.cookie_policy.changes.description"]()}
			</p>
		</section>
	</div>
</div>
