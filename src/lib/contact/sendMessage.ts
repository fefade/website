import transporter from "./transporter"
import renderTemplate from "./renderTemplate"
import type { ContactType } from "./schema"
import { env } from "$env/dynamic/private"

export default async function (data: ContactType) {
	const html = await renderTemplate("template", data)

	return transporter.sendMail({
		from: `"${data.name}" <${env.EMAIL_USER}>`,
		replyTo: data.email,
		to: env.EMAIL_USER,
		subject: "New website contact",
		html
	})
}
