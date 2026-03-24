const SERVICE_NAME = "fefade Account"
const REDIRECT_URI = "https://account.fefade.com"

function getAuthUrl(
	serviceName: string = SERVICE_NAME,
	redirectUri: string = REDIRECT_URI
) {
	const encodedServiceName = encodeURIComponent(serviceName)
	const encodedRedirectUri = encodeURIComponent(redirectUri)
	return `https://auth.fefade.com?service_name=${encodedServiceName}&redirect_uri=${encodedRedirectUri}`
}

export const AUTH_URL = getAuthUrl()

export const SUPPORT_EMAIL = "support@fefade.com"

export const SUPPORT_EMAIL_URL = `mailto:${SUPPORT_EMAIL}`

export const PLAY_STORE_URL =
	"https://play.google.com/store/apps/dev?id=7701571155946352525"

export const GITHUB_URL = "https://github.com/fefade"

export const GTM_ID = "G-G2ESFNYD16"
