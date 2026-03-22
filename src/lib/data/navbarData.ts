import { m } from "$lib/paraglide/messages"
import { withLocalePath } from "$lib/utils/withLocalePath"

export default function () {
	return [
		{
			name: m["common.home"](),
			path: withLocalePath("/")
		},
		{
			name: m["common.contact"](),
			path: withLocalePath("contact")
		}
	]
}
