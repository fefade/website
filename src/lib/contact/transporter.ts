import { env } from "$env/dynamic/private"
import { createTransport } from "nodemailer"

export default createTransport({
	service: "gmail",
	auth: {
		user: env.USER_EMAIL,
		pass: env.USER_PASS
	}
})
