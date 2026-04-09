import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import { enhancedImages } from "@sveltejs/enhanced-img"

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: [
				"preferredLanguage",
				"baseLocale",
				"url",
				"cookie",
				"localStorage",
				"globalVariable"
			]
		})
	]
})
