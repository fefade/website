import { RateLimiterMemory } from "rate-limiter-flexible"

export default new RateLimiterMemory({
	points: 3,
	duration: 60 * 60,
	blockDuration: 30 * 60
})
