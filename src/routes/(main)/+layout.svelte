<script lang="ts">
	import { m } from "$lib/paraglide/messages"
	import {
		getLocale,
		locales,
		setLocale,
		type Locale
	} from "$lib/paraglide/runtime"
	import { withLocalePath } from "$lib/utils/withLocalePath"
	import { Constants } from "@fefade/common"
	import icon180 from "@fefade/common/images/icon-180.png"

	let { children } = $props()

	let isOpen = $state(false)
	let selectElement: HTMLDivElement | undefined = $state()

	function changeLocale(locale: Locale) {
		isOpen = false
		setLocale(locale)
	}

	const getLanguageName = $derived((locale: string) =>
		new Intl.DisplayNames(locales, {
			type: "language"
		}).of(locale)
	)
	const handleClickOutside = (event: MouseEvent) => {
		if (!selectElement?.contains(event.target as Node)) {
			isOpen = false
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

<div class="flex min-h-dvh flex-col bg-[#0d0e11] antialiased">
	<!-- HEADER -->
	<header
		class="fixed inset-x-0 top-0 z-50
         border-b border-gray-800
         bg-[#0d0e11]/95
         px-4 py-4
         shadow-lg shadow-black/20
         backdrop-blur-xl
         sm:px-6 lg:px-8"
	>
		<div class="mx-auto w-full max-w-7xl">
			<!-- TOP BAR -->
			<div class="flex h-10 items-center justify-between">
				<!-- BRAND -->
				<a
					href={withLocalePath("/")}
					title={Constants.ORG_NAME}
					class="flex items-center gap-2 text-white transition-opacity duration-200 hover:opacity-80"
				>
					<img
						alt="logo"
						src={icon180}
						width="48"
						height="48"
					/>
					<span class="font-medium">{Constants.ORG_NAME}</span>
				</a>

				<!-- NAV DESKTOP -->
				<!-- <nav class="hidden items-center gap-2 text-sm md:flex lg:gap-3">
					<a
						href={withLocalePath("/")}
						class="rounded-xl bg-white px-3.5 py-1.5 font-medium text-black transition-all duration-200 hover:bg-gray-200"
					>
						Home
					</a>

					<a
						href="#"
						class="rounded-xl px-3.5 py-1.5 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
					>
						Features
					</a>

					<a
						href="#"
						class="rounded-xl px-3.5 py-1.5 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
					>
						Pricing
					</a>

					<a
						href="#"
						class="rounded-xl px-3.5 py-1.5 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
					>
						Blog
					</a>
				</nav> -->

				<!-- ACTIONS DESKTOP -->
				<div class="hidden items-center gap-2 md:flex">
					<a
						href={withLocalePath("/contact")}
						class="rounded-xl border border-gray-700 px-3 py-1.5 text-sm text-white/90 transition-all duration-200 hover:border-gray-400 hover:bg-white/5 hover:text-white"
					>
						{m["common.contact"]()}
					</a>

					<a
						href={Constants.URLS.auth}
						class="rounded-xl bg-white px-3.5 py-1.5 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-300 sm:px-4"
					>
						{m["common.cta.sign_in"]()}
					</a>
				</div>

				<!-- MOBILE TOGGLE -->
				<!-- <button
					id="menu-toggle"
					type="button"
					aria-label="Open menu"
					aria-expanded="false"
					class="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-700 text-white transition-all duration-200 hover:bg-white/10 md:hidden"
				>
					<i
						id="menu-icon"
						class="bi bi-list text-xl transition-transform duration-300"
					></i>
				</button> -->
			</div>
		</div>

		<!-- MOBILE MENU -->
		<!-- <div
			id="mobile-menu"
			class="
    invisible fixed inset-x-0
    top-18
    h-[calc(100dvh-72px)]

    -translate-y-3 overflow-y-auto
    border-t
    border-gray-800 bg-[#0d0e11]
    opacity-0

    shadow-2xl
    shadow-black/40
    backdrop-blur-xl

    transition-all
    duration-300
    ease-out

    md:hidden
  "
		>
			<nav
				class="
      mx-auto flex min-h-full w-full max-w-7xl
      flex-col gap-1
      px-4 py-6
      sm:px-6
    "
			>
				<a
					href="#"
					class="rounded-xl bg-white px-4 py-3 font-medium text-black transition-colors hover:bg-gray-200"
				>
					Home
				</a>

				<a
					href="#"
					class="rounded-xl px-4 py-3 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
				>
					Features
				</a>

				<a
					href="#"
					class="rounded-xl px-4 py-3 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
				>
					Pricing
				</a>

				<a
					href="#"
					class="rounded-xl px-4 py-3 text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
				>
					Blog
				</a>

				<div
					class="mt-auto grid grid-cols-2 gap-2 border-t border-gray-800 pt-4"
				>
					<a
						href=""
						class="rounded-xl border border-gray-700 px-4 py-3 text-center text-sm text-white/90 transition-all duration-200 hover:border-gray-400 hover:bg-white/5 hover:text-white"
					>
						Contact
					</a>

					<a
						href=""
						class="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black transition-all duration-200 hover:bg-gray-300"
					>
						Sign In
					</a>
				</div>
			</nav>
		</div> -->
	</header>

	<!-- MAIN -->
	<main class="flex-1 pt-18.25">
		{@render children?.()}
	</main>

	<!-- FOOTER -->
	<footer
		class="border-t border-gray-800 bg-[#0d0e11] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
	>
		<div class="mx-auto w-full max-w-7xl">
			<!-- MAIN FOOTER -->
			<div
				class="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20"
			>
				<!-- BRAND -->
				<div class="w-full lg:max-w-lg lg:flex-1">
					<a
						href={withLocalePath("/")}
						class="group flex w-fit items-center gap-2 text-white"
						aria-label="Home"
					>
						<span
							class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#0d0e11] transition-transform duration-200 group-hover:rotate-[-8deg]"
						>
							<img
								alt="logo"
								src={icon180}
								width="48"
								height="48"
							/>
						</span>

						<span class="text-sm font-semibold tracking-tight">
							{Constants.ORG_NAME}
						</span>
					</a>

					<h2
						class="mt-6 max-w-md text-[clamp(1.75rem,5vw,2.25rem)] leading-tight font-medium tracking-tight text-white sm:mt-8"
					>
						{m["footer.title"]()}
					</h2>

					<p class="mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:mt-4">
						{m["footer.description"]()}
					</p>
				</div>

				<!-- FOOTER LINKS -->
				<div
					class="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:w-auto lg:min-w-120 lg:gap-x-16"
				>
					<!-- COMPANY -->
					<div class="min-w-0">
						<h3
							class="text-xs font-medium tracking-wider text-gray-600 uppercase"
						>
							Company
						</h3>

						<nav aria-label="Company">
							<ul class="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
								<li>
									<a
										title={m["common.contact"]()}
										href={withLocalePath("/contact")}
										class="block w-fit text-sm text-gray-400 transition-colors duration-200 hover:text-white"
									>
										{m["common.contact"]()}
									</a>
								</li>

								<!-- <li>
									<a
										href="#about"
										class="block w-fit text-sm text-gray-400 transition-colors duration-200 hover:text-white"
									>
										About
									</a>
								</li> -->
							</ul>
						</nav>
					</div>

					<!-- LEGAL -->
					<div class="min-w-0">
						<h3
							class="text-xs font-medium tracking-wider text-gray-600 uppercase"
						>
							Legal
						</h3>

						<nav aria-label="Legal">
							<ul class="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
								<li>
									<a
										title={m["pages.privacy_policy.title"]()}
										href={withLocalePath("/privacy-policy")}
										class="block w-fit text-sm text-gray-400 transition-colors duration-200 hover:text-white"
									>
										{m["pages.privacy_policy.title"]()}
									</a>
								</li>

								<li>
									<a
										title={m["pages.terms_of_use.title"]()}
										href={withLocalePath("/terms-of-use")}
										class="block w-fit text-sm text-gray-400 transition-colors duration-200 hover:text-white"
									>
										{m["pages.terms_of_use.title"]()}
									</a>
								</li>

								<li>
									<a
										title={m["pages.cookie_policy.title"]()}
										href={withLocalePath("/cookie-policy")}
										class="block w-fit text-sm text-gray-400 transition-colors duration-200 hover:text-white"
									>
										{m["pages.cookie_policy.title"]()}
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<!-- CONNECT -->
					<div class="col-span-2 min-w-0 sm:col-span-1">
						<h3
							class="text-xs font-medium tracking-wider text-gray-600 uppercase"
						>
							Connect
						</h3>

						<ul
							class="mt-4 flex max-w-full flex-wrap gap-2 sm:mt-5 sm:gap-2.5"
							aria-label="Social and contact links"
						>
							<!-- GitHub -->
							<li>
								<a
									href={Constants.URLS.github}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									title="GitHub"
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-500 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<i
										class="bi bi-github text-base"
										aria-hidden="true"
									></i>
								</a>
							</li>

							<!-- Email -->
							<li>
								<a
									href={Constants.URLS.email}
									aria-label="Email"
									title="Email"
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-500 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<i
										class="bi bi-envelope text-base"
										aria-hidden="true"
									></i>
								</a>
							</li>

							<!-- Google Play -->
							<li>
								<a
									href={Constants.URLS.play_store}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Google Play"
									title="Google Play"
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-500 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<i
										class="bi bi-google-play text-base"
										aria-hidden="true"
									></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- BOTTOM -->
			<div
				class="mt-12 flex flex-col gap-5 border-t border-white/6 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
			>
				<p class="text-xs text-gray-600">&#169; 2026 {Constants.ORG_NAME}</p>

				<div
					bind:this={selectElement}
					class="relative"
				>
					<button
						type="button"
						class="group flex w-fit cursor-pointer items-center gap-2 text-xs text-gray-500 transition-colors duration-200 hover:text-white"
						aria-label="Change language"
						aria-haspopup="listbox"
						aria-expanded={isOpen}
						onclick={() => (isOpen = !isOpen)}
					>
						<i
							class="bi bi-globe2 text-sm"
							aria-hidden="true"
						></i>

						<span>{getLanguageName(getLocale())}</span>

						<i
							class="bi bi-chevron-down text-[10px] text-gray-600 transition-transform duration-200 group-hover:text-gray-400"
							class:rotate-180={isOpen}
							aria-hidden="true"
						></i>
					</button>

					{#if isOpen}
						<div
							class="absolute right-0 bottom-full z-50 mb-2 min-w-36 overflow-hidden rounded-lg border border-white/10 bg-zinc-950 p-1 shadow-xl"
							role="listbox"
							aria-label="Languages"
						>
							{#each locales as locale (locale)}
								<button
									type="button"
									role="option"
									aria-selected={getLocale() === locale}
									class="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-left text-xs transition-colors hover:bg-white/5 hover:text-white"
									class:text-white={getLocale() === locale}
									class:text-gray-500={getLocale() !== locale}
									onclick={() => changeLocale(locale)}
								>
									<span>{getLanguageName(locale)}</span>

									{#if getLocale() === locale}
										<i
											class="bi bi-check text-xs"
											aria-hidden="true"
										></i>
									{/if}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</footer>
</div>
