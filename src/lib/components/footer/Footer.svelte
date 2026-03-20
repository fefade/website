<script lang="ts">
	import footerData from "$lib/data/footerData"
	import { m } from "$lib/paraglide/messages"
	import { getLocale, setLocale, type Locale } from "$lib/paraglide/runtime"
	import { Link, Select, Separator, Text } from "@fefade-ui/svelte"

	const locale = getLocale()
</script>

<footer>
	<div
		class="flex flex-col gap-6"
		style="
			width: 90%; 
			padding: 1rem;
			margin: 0 auto;
			"
	>
		<div style="max-width: 250px;">
			<Text as="h2" style="font-weight: 300;">fefade</Text>
			<p class="muted">{m["footer.description"]()}</p>

			<div class="flex gap-4">
				<Link href="mailto:support@fefade.com" style="min-width: 0;">
					<i class="fa-solid fa-envelope icon muted"></i>
				</Link>
				<Link
					href="https://play.google.com/store/apps/dev?id=7701571155946352525"
					target="_blank"
					style="min-width: 0;"
				>
					<i class="fa-brands fa-google-play icon muted"></i>
				</Link>
				<Link
					href="https://github.com/fefade"
					target="_blank"
					style="min-width: 0;"
				>
					<i class="fa-brands fa-github icon muted"></i>
				</Link>
			</div>

			<br />

			<div class="flex items-center gap-2">
				<span class="hidden md:block muted" title="language">
					{m["common.language_label"]()}:
				</span>

				<Select
					style="min-height: 0;"
					title="language selection"
					value={locale}
					onchange={(e) => {
						const { value } = e.currentTarget
						setLocale(value as Locale)
					}}
					selectStyle={{ "font-size": "16px" }}
				>
					<option value="pt-br" label="pt-br">pt-br</option>
					<option value="en" label="en">en</option>
				</Select>
			</div>
		</div>
		<Separator />
		<div class="flex flex-col gap-6" style="height: 60px;">
			<nav class="flex flex-wrap gap-3">
				{#each footerData() as { name, path } (path)}
					<Link href={path}>
						<small>{name}</small>
					</Link>
				{/each}
			</nav>
			<small>&copy; 2026 fefade</small>
		</div>
	</div>
</footer>

<style>
	small {
		font-size: 10px;
	}

	.icon {
		font-size: 18px;
	}
</style>
