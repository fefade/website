import { contactSchema } from "$lib/contact/schema"
import sendMessage from "$lib/contact/sendMessage"
import { withRateLimit } from "$lib/withRateLimit"
import { json, type RequestHandler } from "@sveltejs/kit"
import { z } from "zod"

const handler: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json()

		const parsed = contactSchema.safeParse(body)

		if (!parsed.success) {
			throw new z.ZodError(parsed.error.issues)
		}

		await sendMessage(parsed.data)

		return new Response(undefined, { status: 200 })
	} catch (err) {
		console.error(err)

		if (err instanceof z.ZodError) {
			return json({ error: err.issues[0].message }, { status: 400 })
		}

		return json({ error: "Internal server error" }, { status: 500 })
	}
}

export const POST = withRateLimit(handler)
