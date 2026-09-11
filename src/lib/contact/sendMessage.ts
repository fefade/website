import transporter from "./transporter"
import renderTemplate from "./renderTemplate"
import type { ContactType } from "./schema"
import { env } from "$env/dynamic/private"

export default async function (data: ContactType) {
	const html = await renderTemplate(data)

	return transporter.sendMail({
		from: `"${data.name}" <${env.USER_EMAIL}>`,
		replyTo: data.email,
		to: env.CONTACT_EMAIL,
		subject: `Website Contact: ${data.name}`,
		html
	})
}
