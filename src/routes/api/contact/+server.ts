import { env } from "$env/dynamic/private"
import { contactSchema } from "$lib/contact/schema"
import sendMessage from "$lib/contact/sendMessage"
import { withRateLimit, validateTurnstile, handleError } from "@fefade/common"
import { json, type RequestHandler } from "@sveltejs/kit"
import { RateLimiterMemory } from "rate-limiter-flexible"
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
		const parsedError = handleError(err)
		return json({ error: parsedError.message }, { status: parsedError.status })
	}
}

export const POST = withRateLimit(
	validateTurnstile(handler, env.TURNSTILE_SECRET_KEY),
	new RateLimiterMemory({
		points: 3,
		duration: 60 * 60,
		blockDuration: 30 * 60
	})
)
