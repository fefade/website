import type { resolve } from "$app/paths"
import { getLocale } from "$lib/paraglide/runtime"
import { Constants } from "@fefade/common"

type Options = {
	locale?: string
	defaultLocale?: string
}

type Path = Parameters<typeof resolve>[0]

export function withLocalePath<P extends Path>(
	path: P,
	{
		locale = getLocale(),
		defaultLocale = Constants.DEFAULT_LOCALE
	}: Options = {}
): string {
	if (!path) return "/"

	let normalizedPath = path.startsWith("/") ? path : `/${path}`

	normalizedPath = normalizedPath.replace(/\/{2,}/g, "/")

	const defaultLocalePrefix = `/${defaultLocale}`

	if (
		normalizedPath === defaultLocalePrefix ||
		normalizedPath.startsWith(`${defaultLocalePrefix}/`)
	) {
		normalizedPath = normalizedPath.slice(defaultLocalePrefix.length) || "/"
	}

	if (!locale || locale === defaultLocale) {
		return normalizedPath
	}

	const localePrefix = `/${locale}`

	if (
		normalizedPath === localePrefix ||
		normalizedPath.startsWith(`${localePrefix}/`)
	) {
		return normalizedPath
	}

	return `${localePrefix}${normalizedPath}`
}
