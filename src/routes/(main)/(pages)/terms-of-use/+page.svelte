<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.terms_of_use.title"]()} | {data.title}</title>
	<meta
		name="description"
		content={m["pages.terms_of_use.introduction"]()}
	/>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<header class="mb-16 border-b border-zinc-800 pb-12">
		<div
			class="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs font-medium tracking-wide text-zinc-400"
		>
			Legal
		</div>

		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
			{m["pages.terms_of_use.title"]()}
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
			{m["pages.terms_of_use.introduction"]()}
		</p>
	</header>

	<div class="space-y-6">
		<section
			id="user-responsibilities"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.userResponsibilities.title"]()}
			</h2>

			<ul class="mt-5 space-y-3 text-zinc-400">
				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.userResponsibilities.items.accuracy"]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.userResponsibilities.items.lawfulUse"]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m[
							"pages.terms_of_use.userResponsibilities.items.accountSecurity"
						]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.userResponsibilities.items.respect"]()}
					</span>
				</li>
			</ul>
		</section>

		<section
			id="prohibited-uses"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.prohibitedUses.title"]()}
			</h2>

			<ul class="mt-5 space-y-3 text-zinc-400">
				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.prohibitedUses.items.illegal"]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.prohibitedUses.items.interference"]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.prohibitedUses.items.unauthorizedAccess"]()}
					</span>
				</li>

				<li class="flex gap-3 leading-7">
					<span class="mt-3 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.terms_of_use.prohibitedUses.items.distribution"]()}
					</span>
				</li>
			</ul>
		</section>

		<section
			id="intellectual-property"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.intellectualProperty.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.intellectualProperty.description"]()}
			</p>
		</section>

		<section
			id="service-availability"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.serviceAvailability.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.serviceAvailability.description"]()}
			</p>
		</section>

		<section
			id="modifications"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.modifications.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.modifications.description"]()}
			</p>
		</section>

		<section
			id="limitation-of-liability"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.limitationOfLiability.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.limitationOfLiability.description"]()}
			</p>
		</section>

		<section
			id="termination"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.termination.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.termination.description"]()}
			</p>
		</section>

		<section
			id="applicable-law"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.terms_of_use.applicableLaw.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.terms_of_use.applicableLaw.description"]()}
			</p>
		</section>
	</div>
</div>
