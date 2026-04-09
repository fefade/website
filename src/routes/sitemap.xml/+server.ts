import { Constants } from "@fefade/common"
import { locales } from "$lib/paraglide/runtime"

const ROUTES = [
	"/",
	"/contact",
	"/cookie-policy",
	"/privacy-policy",
	"/terms-of-use"
]

function buildPath(route: string, locale: string) {
	return locale === Constants.DEFAULT_LOCALE ? route : `/${locale}${route}`
}

function buildAlternateLinks(route: string) {
	return locales
		.map((locale) => {
			const path = buildPath(route, locale)

			return `<xhtml:link rel="alternate" hreflang="${locale}" href="${Constants.URLS.base}${path}" />`
		})
		.join("\n")
}

function buildUrlEntry(route: string, locale: string) {
	const path = buildPath(route, locale)
	const alternates = buildAlternateLinks(route)

	return `
	<url>
		<loc>${Constants.URLS.base}${path}</loc>
		${alternates}
	</url>`.trim()
}

function buildUrls() {
	return ROUTES.flatMap((route) =>
		locales.map((locale) => buildUrlEntry(route, locale))
	).join("\n")
}

export async function GET() {
	const urls = buildUrls()

	const sitemap = `
	<?xml version="1.0" encoding="UTF-8" ?>
	<urlset
		xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xhtml="https://www.w3.org/1999/xhtml"
		xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
		xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
		xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
		xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
	>
	${urls}
	</urlset>
	`.trim()

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml"
		}
	})
}
