import type { Handle } from "@sveltejs/kit"
import { paraglideMiddleware } from "$lib/paraglide/server"

function normalizeLang(lang: string) {
	const [l, r] = lang.split("-")
	return r ? `${l.toLowerCase()}-${r.toUpperCase()}` : l.toLowerCase()
}

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace("%paraglide.lang%", normalizeLang(locale))
		})
	})

export const handle: Handle = handleParaglide
