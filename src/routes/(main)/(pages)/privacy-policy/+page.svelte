<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.privacy_policy.title"]()} | {data.title}</title>
	<meta
		name="description"
		content={m["pages.privacy_policy.introduction"]()}
	/>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<header class="mb-16 border-b border-zinc-800 pb-12">
		<div
			class="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs font-medium tracking-wide text-zinc-400"
		>
			Privacy
		</div>

		<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
			{m["pages.privacy_policy.title"]()}
		</h1>

		<p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
			{m["pages.privacy_policy.introduction"]()}
		</p>
	</header>

	<div class="space-y-6">
		<section
			id="legal-basis"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.legalBasis.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.privacy_policy.legalBasis.description"]()}
			</p>
		</section>

		<section
			id="information-we-collect"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.informationWeCollect.title"]()}
			</h2>

			<ul class="mt-5 space-y-3 text-zinc-400">
				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m[
							"pages.privacy_policy.informationWeCollect.items.identification"
						]()}
					</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.privacy_policy.informationWeCollect.items.navigation"]()}
					</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.privacy_policy.informationWeCollect.items.usage"]()}
					</span>
				</li>
			</ul>
		</section>

		<section
			id="purpose-of-use"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.purposeOfUse.title"]()}
			</h2>

			<ul class="mt-5 space-y-3 text-zinc-400">
				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.purposeOfUse.items.service"]()}</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>
						{m["pages.privacy_policy.purposeOfUse.items.communication"]()}
					</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.purposeOfUse.items.legal"]()}</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.purposeOfUse.items.security"]()}</span>
				</li>
			</ul>
		</section>

		<section
			id="data-sharing"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.dataSharing.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.privacy_policy.dataSharing.description"]()}
			</p>
		</section>

		<section
			id="data-retention"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.dataRetention.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.privacy_policy.dataRetention.description"]()}
			</p>
		</section>

		<section
			id="your-rights"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.yourRights.title"]()}
			</h2>

			<ul class="mt-5 grid gap-3 text-zinc-400 sm:grid-cols-2">
				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span
						>{m["pages.privacy_policy.yourRights.items.confirmation"]()}</span
					>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.access"]()}</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.correction"]()}</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span
						>{m["pages.privacy_policy.yourRights.items.anonymization"]()}</span
					>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.portability"]()}</span
					>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.deletion"]()}</span>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.information"]()}</span
					>
				</li>

				<li class="flex gap-3">
					<span class="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500"></span>
					<span>{m["pages.privacy_policy.yourRights.items.consent"]()}</span>
				</li>
			</ul>
		</section>

		<section
			id="data-security"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.dataSecurity.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.privacy_policy.dataSecurity.description"]()}
			</p>
		</section>

		<section
			id="changes"
			class="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm sm:p-8"
		>
			<h2 class="text-xl font-semibold tracking-tight text-white">
				{m["pages.privacy_policy.changes.title"]()}
			</h2>

			<p class="mt-4 leading-7 text-zinc-400">
				{m["pages.privacy_policy.changes.description"]()}
			</p>
		</section>
	</div>
</div>
