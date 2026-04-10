import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import { paraglideVitePlugin } from "@inlang/paraglide-js"
import { enhancedImages } from "@sveltejs/enhanced-img"
import { Constants } from "@fefade/common"

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: Constants.LANG_STRATEGY
		})
	]
})
