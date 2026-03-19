<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { Button, Textarea, TextField } from "@fefade-ui/svelte"

	let { data } = $props()

	async function handleSubmit() {}
</script>

<svelte:head>
	<title>{m["pages.contact.title"]()} | {data.title}</title>
</svelte:head>

<div class="flex flex-col md:flex-row gap-6">
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
			Fill out the form below to send us your message. Make sure to double-check your
			email address, as it’s the channel through which we will reply.
		</p>
	</div>

	<form class="flex flex-col gap-6" style="flex: 1;" onsubmit={handleSubmit}>
		<TextField id="name" name="name" label="Name" />
		<TextField id="email" name="email" label="Email" />

		<strong>Message:</strong>
		<Textarea id="message" name="message" style="min-height: 150px;" />
		<Button disabled>Send</Button>
	</form>
</div>
