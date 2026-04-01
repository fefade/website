import { Constants } from "$lib"
import type { LayoutServerLoad } from "./$types"

export const load = (async () => {
	return {
		title: Constants.APP_NAME
	}
}) satisfies LayoutServerLoad
