<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { Alert, Button, Textarea, TextField } from "@fefade-ui/svelte"
	import * as Constants from "$lib/constants"

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

		try {
			isLoading = true

			if (!email || !name || !message) {
				throw new Error("Fill in the required fields.")
			}

			const response = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					email,
					name,
					message
				})
			})

			if (!response.ok) {
				const { error } = await response.json()
				throw new Error(error)
			}

			sent = true
			messageError = undefined
		} catch (error) {
			messageError = (error as Error).message
		} finally {
			isLoading = false
		}
	}
</script>

<svelte:head>
	<title>{m["pages.contact.title"]()} | {data.title}</title>
	<meta name="description" content={m["pages.contact.introduction"]()} />
</svelte:head>

<div class="flex flex-col md:flex-row gap-10">
	<div style="flex: 1;">
		<h1>{m["pages.contact.title"]()}</h1>
		<p>
			<strong>{m["pages.contact.section_one.title"]()}</strong>
			<br />
			{m["pages.contact.section_one.description"]()}
		</p>

		<p>
			<strong>{m["pages.contact.section_two.title"]()}</strong>
			<br />
			{@html m["pages.contact.section_two.description"]({
				email: `<a title="email" href=${Constants.SUPPORT_EMAIL_URL}>${Constants.SUPPORT_EMAIL}</a>`
			})}
		</p>
	</div>

	<form
		class="flex flex-col gap-6"
		style="flex: 1;"
		onsubmit={handleSubmit}
		autocomplete="off"
		novalidate
	>
		{#if messageError}
			<Alert color="error">{messageError}</Alert>
		{:else if sent}
			<Alert color="success">{m["pages.contact.sent"]()}</Alert>
		{/if}
		<TextField id="name" name="name" label={m["common.name"]()} required />
		<TextField id="email" name="email" label="Email" required />

		<strong>{m["common.message"]()}:</strong>
		<Textarea id="message" name="message" style="min-height: 150px;" required />
		<Button {isLoading} disabled={isLoading} type="submit">
			{m["common.cta.send"]()}
		</Button>
	</form>
</div>
