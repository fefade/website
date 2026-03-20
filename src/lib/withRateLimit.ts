import { json, type RequestHandler } from "@sveltejs/kit"
import { RateLimiterRes } from "rate-limiter-flexible"
import rateLimiter from "./rateLimiter"

export function withRateLimit(handler: RequestHandler): RequestHandler {
	return async (event) => {
		const { request, getClientAddress } = event

		const ip =
			request.headers.get("x-forwarded-for")?.split(",")[0] ||
			getClientAddress?.() ||
			"unknown"

		try {
			await rateLimiter.consume(ip)
		} catch (err) {
			if (err instanceof RateLimiterRes) {
				return json(
					{ error: "Too many requests" },
					{
						status: 429,
						headers: {
							"Retry-After": String(Math.round(err.msBeforeNext / 1000) || 1800)
						}
					}
				)
			}
		}

		return handler(event)
	}
}
