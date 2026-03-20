<script lang="ts">
	import { m } from "$lib/paraglide/messages.js"

	let { data } = $props()
</script>

<svelte:head>
	<title>{m["pages.privacy_policy.title"]()} | {data.title}</title>
	<meta name="description" content={m["pages.privacy_policy.introduction"]()} />
</svelte:head>

<header>
	<h1>{m["pages.privacy_policy.title"]()}</h1>
	<p>{m["pages.privacy_policy.introduction"]()}</p>
</header>

<section id="legal-basis">
	<h2>{m["pages.privacy_policy.legalBasis.title"]()}</h2>
	<p>{m["pages.privacy_policy.legalBasis.description"]()}</p>
</section>

<section id="information-we-collect">
	<h2>{m["pages.privacy_policy.informationWeCollect.title"]()}</h2>
	<ul>
		<li>
			{m["pages.privacy_policy.informationWeCollect.items.identification"]()}
		</li>
		<li>{m["pages.privacy_policy.informationWeCollect.items.navigation"]()}</li>
		<li>{m["pages.privacy_policy.informationWeCollect.items.usage"]()}</li>
	</ul>
</section>

<section id="purpose-of-use">
	<h2>{m["pages.privacy_policy.purposeOfUse.title"]()}</h2>
	<ul>
		<li>{m["pages.privacy_policy.purposeOfUse.items.service"]()}</li>
		<li>{m["pages.privacy_policy.purposeOfUse.items.communication"]()}</li>
		<li>{m["pages.privacy_policy.purposeOfUse.items.legal"]()}</li>
		<li>{m["pages.privacy_policy.purposeOfUse.items.security"]()}</li>
	</ul>
</section>

<section id="data-sharing">
	<h2>{m["pages.privacy_policy.dataSharing.title"]()}</h2>
	<p>{m["pages.privacy_policy.dataSharing.description"]()}</p>
</section>

<section id="data-retention">
	<h2>{m["pages.privacy_policy.dataRetention.title"]()}</h2>
	<p>{m["pages.privacy_policy.dataRetention.description"]()}</p>
</section>

<section id="your-rights">
	<h2>{m["pages.privacy_policy.yourRights.title"]()}</h2>
	<ul>
		<li>{m["pages.privacy_policy.yourRights.items.confirmation"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.access"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.correction"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.anonymization"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.portability"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.deletion"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.information"]()}</li>
		<li>{m["pages.privacy_policy.yourRights.items.consent"]()}</li>
	</ul>
</section>

<section id="data-security">
	<h2>{m["pages.privacy_policy.dataSecurity.title"]()}</h2>
	<p>{m["pages.privacy_policy.dataSecurity.description"]()}</p>
</section>

<section id="changes">
	<h2>{m["pages.privacy_policy.changes.title"]()}</h2>
	<p>{m["pages.privacy_policy.changes.description"]()}</p>
</section>
