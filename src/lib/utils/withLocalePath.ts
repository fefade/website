type Options = {
	locale?: string
	defaultLocale?: string
}

export function withLocalePath(
	path: string,
	{ locale, defaultLocale = "en" }: Options = {}
): string {
	if (!path) return "/"

	let normalizedPath = path.startsWith("/") ? path : `/${path}`

	normalizedPath = normalizedPath.replace(/\/{2,}/g, "/")

	if (
		normalizedPath === `/${defaultLocale}` ||
		normalizedPath.startsWith(`/${defaultLocale}/`)
	) {
		normalizedPath =
			normalizedPath.replace(new RegExp(`^/${defaultLocale}`), "") || "/"
	}

	if (!locale || locale === defaultLocale) {
		return normalizedPath
	}

	if (
		normalizedPath === `/${locale}` ||
		normalizedPath.startsWith(`/${locale}/`)
	) {
		return normalizedPath
	}

	return `/${locale}${normalizedPath}`
}
