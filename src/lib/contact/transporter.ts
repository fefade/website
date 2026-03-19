import { env } from "$env/dynamic/private"
import { createTransport } from "nodemailer"

export default createTransport({
	service: "gmail",
	auth: {
		user: env.EMAIL_USER,
		pass: env.EMAIL_PASS
	}
})
