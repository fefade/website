import { m } from "$lib/paraglide/messages"
import { withLocalePath } from "$lib/utils/withLocalePath"

export default function () {
	return [
		{
			name: m["pages.privacy_policy.title"](),
			path: withLocalePath("privacy-policy")
		},
		{
			name: m["pages.cookie_policy.title"](),
			path: withLocalePath("cookie-policy")
		},
		{
			name: m["pages.terms_of_use.title"](),
			path: withLocalePath("terms-of-use")
		}
	]
}
