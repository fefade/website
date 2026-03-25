export const AUTH_URL = "https://auth.fefade.com"

export const SUPPORT_EMAIL = "support@fefade.com"

export const SUPPORT_EMAIL_URL = `mailto:${SUPPORT_EMAIL}`

export const PLAY_STORE_URL =
	"https://play.google.com/store/apps/dev?id=7701571155946352525"

export const GITHUB_URL = "https://github.com/fefade"

export const DEFAULT_LOCALE = "en"

export const BASE_URL = "https://fefade.com"

const PREFIX = "ff"

export const COOKIE_CONSENT_FROM_STORAGE = {
	key: `${PREFIX}-cookie-consent`,
	value: function () {
		return localStorage.getItem(this.key)
	},
	accept: function () {
		localStorage.setItem(this.key, JSON.stringify(true))
	},
	decline: function () {
		localStorage.setItem(this.key, JSON.stringify(false))
	},
	accepted: function () {
		return this.value() === "true"
	},
	declined: function () {
		return this.value() === "false"
	}
}
