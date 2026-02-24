<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { Link } from "@fefade-ui/svelte"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.cookie_policy.title"]()} | {data.title}</title>
	<meta name="description" content={m["pages.cookie_policy.introduction"]()} />
</svelte:head>

<header>
	<h1>{m["pages.cookie_policy.title"]()}</h1>
	<p>{m["pages.cookie_policy.introduction"]()}</p>
</header>

<section id="what-are-cookies">
	<h2>{m["pages.cookie_policy.whatAreCookies.title"]()}</h2>
	<p>{m["pages.cookie_policy.whatAreCookies.description"]()}</p>
</section>

<section id="why-we-use-cookies">
	<h2>{m["pages.cookie_policy.whyWeUseCookies.title"]()}</h2>
	<ul>
		<li>
			<strong
				>{m["pages.cookie_policy.whyWeUseCookies.items.essential"]().split(
					":"
				)[0]}:</strong
			>
			{m["pages.cookie_policy.whyWeUseCookies.items.essential"]().split(":")[1]}
		</li>
		<li>
			<strong
				>{m["pages.cookie_policy.whyWeUseCookies.items.performance"]().split(
					":"
				)[0]}:</strong
			>
			{m["pages.cookie_policy.whyWeUseCookies.items.performance"]().split(
				":"
			)[1]}
		</li>
		<li>
			<strong
				>{m["pages.cookie_policy.whyWeUseCookies.items.functionality"]().split(
					":"
				)[0]}:</strong
			>
			{m["pages.cookie_policy.whyWeUseCookies.items.functionality"]().split(
				":"
			)[1]}
		</li>
		<li>
			<strong
				>{m["pages.cookie_policy.whyWeUseCookies.items.marketing"]().split(
					":"
				)[0]}:</strong
			>
			{m["pages.cookie_policy.whyWeUseCookies.items.marketing"]().split(":")[1]}
		</li>
	</ul>
</section>

<section id="control-cookies">
	<h2>{m["pages.cookie_policy.controlCookies.title"]()}</h2>
	<p>{m["pages.cookie_policy.controlCookies.description"]()}</p>
</section>

<section id="changes">
	<h2>{m["pages.cookie_policy.changes.title"]()}</h2>
	<p>{m["pages.cookie_policy.changes.description"]()}</p>
</section>

<section id="contact">
	<h2>{m["pages.cookie_policy.contact.title"]()}</h2>
	<p>
		{m["pages.cookie_policy.contact.description"]()}
		<Link href="mailto:support@fefade.com" hover="underlineNone">
			support@fefade.com
		</Link>
	</p>
</section>
