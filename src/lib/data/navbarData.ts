import { m } from "$lib/paraglide/messages"
import { getLocale } from "$lib/paraglide/runtime"
import { withLocalePath } from "$lib/utils/withLocalePath"

export default function () {
	const locale = getLocale()

	return [
		{
			name: m["common.home"](),
			path: withLocalePath("/", { locale })
		},
		{
			name: m["common.contact"](),
			path: withLocalePath("contact", { locale })
		}
	]
}
