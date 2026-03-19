import { m } from "$lib/paraglide/messages"
import { getLocale } from "$lib/paraglide/runtime"
import { withLocalePath } from "$lib/utils/withLocalePath"

export default function () {
	const locale = getLocale()

	return [
		{
			name: m["pages.privacy_policy.title"](),
			path: withLocalePath("privacy-policy", { locale })
		},
		{
			name: m["pages.cookie_policy.title"](),
			path: withLocalePath("cookie-policy", { locale })
		},
		{
			name: m["pages.terms_of_use.title"](),
			path: withLocalePath("terms-of-use", { locale })
		}
	]
}
