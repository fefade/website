import fs from "fs/promises"
import path from "path"
import Handlebars from "handlebars"

export default async function (
	templateName: string,
	data: Record<string, unknown>
) {
	const filePath = path.resolve("src/lib/contact", `${templateName}.hbs`)

	const file = await fs.readFile(filePath, "utf-8")
	const template = Handlebars.compile(file)

	return template(data)
}
