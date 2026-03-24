import Handlebars from "handlebars"
import templateString from "./template.hbs?raw"

export default async function (data: Record<string, unknown>) {
	const template = Handlebars.compile(templateString)
	return template(data)
}
