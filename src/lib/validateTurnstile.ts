import { env } from "$env/dynamic/private"
import { json, type RequestHandler } from "@sveltejs/kit"

async function siteverify(token: string, remoteip: string) {
	return fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			secret: env.TURNSTILE_SECRET_KEY,
			response: token,
			remoteip: remoteip
		})
	})
}

export default function (handler: RequestHandler): RequestHandler {
	return async (event) => {
		const { request, getClientAddress } = event
		const body = await request.json()

		const token = body["cf-turnstile-response"]
		const ip =
			request.headers.get("CF-Connecting-IP") ||
			request.headers.get("X-Forwarded-For") ||
			getClientAddress() ||
			"unknown"

		if (!token) {
			return json({ error: "Captcha not sent" })
		}

		const response = await siteverify(token.toString(), ip)
		if (!response.ok) {
			return json({ error: "Invalid verification" }, { status: 400 })
		}

		return handler(event)
	}
}
