import { Constants } from "@fefade/common"

export const GTM_ID = "G-G2ESFNYD16"

export const COOKIE_CONSENT_FROM_STORAGE = {
	key: `${Constants.PREFIX}-cookie-consent`,
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
