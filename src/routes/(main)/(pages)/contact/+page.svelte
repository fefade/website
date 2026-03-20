<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { Alert, Button, Textarea, TextField } from "@fefade-ui/svelte"

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
</svelte:head>

<div class="flex flex-col md:flex-row gap-10">
	<div style="flex: 1;">
		<h1>{m["pages.contact.title"]()}</h1>
		<p>
			<strong>Need help? We’re here for you!</strong>
			<br />
			Our online support hours are Monday to Friday, from 8:00 AM to 5:00 PM. You
			will receive a response within 2 business days.
		</p>

		<p>
			<strong>Email Support</strong>
			<br />
			Fill out the form below to send us your message. Make sure to double-check your
			email address, as it’s the channel through which we will reply.
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
			<Alert color="success">Message sent successfully.</Alert>
		{/if}
		<TextField id="name" name="name" label="Name" required />
		<TextField id="email" name="email" label="Email" required />

		<strong>Message:</strong>
		<Textarea id="message" name="message" style="min-height: 150px;" required />
		<Button {isLoading} disabled={isLoading} type="submit">Send</Button>
	</form>
</div>
