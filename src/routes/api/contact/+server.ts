import { contactSchema } from "$lib/contact/schema"
import sendMessage from "$lib/contact/sendMessage"
import { json, type RequestHandler } from "@sveltejs/kit"
import { z } from "zod"

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json()

		const parsed = contactSchema.safeParse(body)

		if (!parsed.success) {
			return json({ error: z.treeifyError(parsed.error) }, { status: 400 })
		}

		await sendMessage(parsed.data)

		return json({ success: true }, { status: 200 })
	} catch (err) {
		console.error(err)

		return json({ error: "Internal server error" }, { status: 500 })
	}
}
