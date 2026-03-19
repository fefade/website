import { z } from "zod"

export const contactSchema = z.object({
	name: z.string().min(2, "Very short name"),
	email: z.email("Invalid email"),
	message: z.string().min(10, "Very short message")
})

export type ContactType = z.infer<typeof contactSchema>
