import type { Handle } from "@sveltejs/kit"
import { paraglideMiddleware } from "$lib/paraglide/server"
import { normalizeLang } from "@fefade/common"

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request

		return resolve(event, {
			transformPageChunk: ({ html }) =>
				html.replace("%paraglide.lang%", normalizeLang(locale))
		})
	})

export const handle: Handle = handleParaglide
