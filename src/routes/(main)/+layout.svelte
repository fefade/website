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
	import icon180 from "@fefade/common/images/icon-180.png?enhanced"
	import {
		Check as CheckIcon,
		ChevronDown as ChevronDownIcon,
		Envelope as EnvelopeIcon,
		Github as GithubIcon,
		Globe2 as Globe2Icon,
		GooglePlay as GooglePlayIcon
		// List as ListIcon
	} from "svelte-bootstrap-icons"

	let { children } = $props()

	let isOpen = $state(false)
	let selectElement: HTMLDivElement | undefined = $state()

	function changeLocale(locale: Locale) {
		isOpen = false
		setLocale(locale)
	}

	const getLanguageName = (locale: string) =>
		new Intl.DisplayNames(locales, {
			type: "language"
		}).of(locale)

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
					class="flex min-w-0 items-center gap-2 text-white transition-opacity duration-200 hover:opacity-80"
					href={withLocalePath("/")}
					title={Constants.ORG_NAME}
				>
					<enhanced:img
						alt="logo"
						src={icon180}
						width="48"
						height="48"
						class="h-9 w-9 shrink-0 sm:h-12 sm:w-12"
					/>

					<span class="min-w-0 truncate text-sm font-medium sm:text-base">
						{Constants.ORG_NAME}
					</span>
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
				<div class="flex items-center gap-2">
					<a
						href={withLocalePath("/contact")}
						class="hidden rounded-xl border border-gray-700 px-3 py-1.5 text-sm text-white/90 transition-all duration-200 hover:border-gray-400 hover:bg-white/5 hover:text-white md:flex"
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
					<ListIcon class="text-xl transition-transform duration-300" />
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
						class="group flex w-fit max-w-full min-w-0 items-center gap-2 text-white"
						aria-label="Home"
					>
						<span
							class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white transition-transform duration-200 group-hover:rotate-[-8deg] sm:h-9 sm:w-9"
						>
							<enhanced:img
								alt="logo"
								src={icon180}
								width="48"
								height="48"
								class="h-6 w-6 object-contain sm:h-7 sm:w-7"
							/>
						</span>

						<span
							class="min-w-0 truncate text-sm font-semibold tracking-tight text-white sm:text-base"
						>
							{Constants.ORG_NAME}
						</span>
					</a>

					<h2
						class="mt-5 max-w-md text-[clamp(1.75rem,7vw,2.25rem)] leading-[1.1] font-medium tracking-tight text-white sm:mt-8"
					>
						{m["footer.title"]()}
					</h2>

					<p
						class="mt-3 max-w-sm px-[0.4rem] text-sm leading-6 text-gray-400 sm:mt-4"
					>
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
							class="text-xs font-medium tracking-wider text-gray-400 uppercase"
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
							class="text-xs font-medium tracking-wider text-gray-400 uppercase"
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
							class="text-xs font-medium tracking-wider text-gray-400 uppercase"
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
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-400 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<GithubIcon />
								</a>
							</li>

							<!-- Email -->
							<li>
								<a
									href={Constants.URLS.email}
									aria-label="Email"
									title="Email"
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-400 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<EnvelopeIcon />
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
									class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/6 text-gray-400 transition-all duration-200 hover:border-white/10 hover:bg-white/4 hover:text-white sm:h-10 sm:w-10"
								>
									<GooglePlayIcon />
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
				<p class="text-xs text-gray-400">
					&#169; 2026 {Constants.ORG_NAME}
				</p>

				<div
					bind:this={selectElement}
					class="relative w-fit max-w-full sm:shrink-0"
				>
					<button
						type="button"
						class="group flex w-fit max-w-full cursor-pointer items-center gap-2 text-xs text-gray-400 transition-colors duration-200 hover:text-white"
						aria-label="Change language"
						aria-haspopup="listbox"
						aria-expanded={isOpen}
						onclick={() => (isOpen = !isOpen)}
					>
						<Globe2Icon
							class="shrink-0 text-sm"
							aria-hidden="true"
						/>

						<span class="truncate">
							{getLanguageName(getLocale())}
						</span>

						<span class:rotate-180={isOpen}>
							<ChevronDownIcon
								class="shrink-0 text-[10px] text-gray-500 transition-transform duration-200 group-hover:text-gray-300"
								aria-hidden="true"
							/>
						</span>
					</button>

					{#if isOpen}
						<div
							class="
							absolute bottom-full left-0 z-50
							mb-2
							w-48 max-w-[calc(100vw-2rem)]
							overflow-hidden rounded-lg
							border border-white/10
							bg-zinc-950 p-1
							shadow-xl
							sm:right-0 sm:left-auto
						"
							role="listbox"
							aria-label="Languages"
						>
							{#each locales as locale (locale)}
								<button
									type="button"
									role="option"
									aria-selected={getLocale() === locale}
									class="
									flex w-full min-w-0
									cursor-pointer items-center justify-between
									gap-3 rounded-md
									px-3 py-2
									text-left text-xs
									transition-colors
									hover:bg-white/5 hover:text-white
								"
									class:text-white={getLocale() === locale}
									class:text-gray-400={getLocale() !== locale}
									onclick={() => changeLocale(locale)}
								>
									<span class="min-w-0 truncate">
										{getLanguageName(locale)}
									</span>

									{#if getLocale() === locale}
										<CheckIcon
											class="shrink-0 text-xs"
											aria-hidden="true"
										/>
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
