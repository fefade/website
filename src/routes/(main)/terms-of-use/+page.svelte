<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"
	import { Link } from "@fefade-ui/svelte"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.terms_of_use.title"]()} | {data.title}</title>
	<meta name="description" content={m["pages.terms_of_use.introduction"]()} />
</svelte:head>

<header>
	<h1>{m["pages.terms_of_use.title"]()}</h1>
	<p>{m["pages.terms_of_use.introduction"]()}</p>
</header>

<section id="user-responsibilities">
	<h2>{m["pages.terms_of_use.userResponsibilities.title"]()}</h2>
	<ul>
		<li>{m["pages.terms_of_use.userResponsibilities.items.accuracy"]()}</li>
		<li>{m["pages.terms_of_use.userResponsibilities.items.lawfulUse"]()}</li>
		<li>
			{m["pages.terms_of_use.userResponsibilities.items.accountSecurity"]()}
		</li>
		<li>{m["pages.terms_of_use.userResponsibilities.items.respect"]()}</li>
	</ul>
</section>

<section id="prohibited-uses">
	<h2>{m["pages.terms_of_use.prohibitedUses.title"]()}</h2>
	<ul>
		<li>{m["pages.terms_of_use.prohibitedUses.items.illegal"]()}</li>
		<li>{m["pages.terms_of_use.prohibitedUses.items.interference"]()}</li>
		<li>{m["pages.terms_of_use.prohibitedUses.items.unauthorizedAccess"]()}</li>
		<li>{m["pages.terms_of_use.prohibitedUses.items.distribution"]()}</li>
	</ul>
</section>

<section id="intellectual-property">
	<h2>{m["pages.terms_of_use.intellectualProperty.title"]()}</h2>
	<p>{m["pages.terms_of_use.intellectualProperty.description"]()}</p>
</section>

<section id="service-availability">
	<h2>{m["pages.terms_of_use.serviceAvailability.title"]()}</h2>
	<p>{m["pages.terms_of_use.serviceAvailability.description"]()}</p>
</section>

<section id="modifications">
	<h2>{m["pages.terms_of_use.modifications.title"]()}</h2>
	<p>{m["pages.terms_of_use.modifications.description"]()}</p>
</section>

<section id="limitation-of-liability">
	<h2>{m["pages.terms_of_use.limitationOfLiability.title"]()}</h2>
	<p>{m["pages.terms_of_use.limitationOfLiability.description"]()}</p>
</section>

<section id="termination">
	<h2>{m["pages.terms_of_use.termination.title"]()}</h2>
	<p>{m["pages.terms_of_use.termination.description"]()}</p>
</section>

<section id="applicable-law">
	<h2>{m["pages.terms_of_use.applicableLaw.title"]()}</h2>
	<p>{m["pages.terms_of_use.applicableLaw.description"]()}</p>
</section>

<section id="contact">
	<h2>{m["pages.terms_of_use.contact.title"]()}</h2>
	<p>
		{m["pages.terms_of_use.contact.description"]()}
		<Link href="mailto:support@fefade.com" hover="underlineNone">
			support@fefade.com
		</Link>
	</p>
</section>
