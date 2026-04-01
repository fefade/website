<script lang="ts">
	import { withLocalePath } from "$lib/utils/withLocalePath"
	import { Link } from "@fefade-ui/svelte"
	import icon180 from "$lib/assets/images/icon-180.png?enhanced"
	import type { Snippet } from "svelte"
	import type { HTMLImgAttributes } from "svelte/elements"
	import { Constants } from "$lib"

	interface Props extends HTMLImgAttributes {
		children?: Snippet<[]>
	}

	let { children, ...rest }: Props = $props()
</script>

<Link
	title={Constants.APP_NAME}
	href={withLocalePath("/")}
	style="
	user-select: none; 
	line-height: normal;
	"
>
	<enhanced:img {...rest} alt="logo" src={icon180} width="48" height="48" />
	{@render children?.()}
</Link>
