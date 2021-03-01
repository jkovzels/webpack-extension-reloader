import {readFileSync} from "fs";
import {flatMapDeep} from "lodash";
import {Entry} from "webpack";
import {
	bgScriptEntryErrorMsg,
	bgScriptManifestRequiredMsg,
} from "../messages/errors";

export interface Output {
	filename?: string;
}

export function extractEntries(
	webpackEntry: Entry,
	filename: string | undefined,
	manifestPath: string,
): IEntriesOption {
	const manifestJson = JSON.parse(
		readFileSync(manifestPath).toString(),
	) as IExtensionManifest;
	const {background, content_scripts} = manifestJson;

	if(!filename) {
		throw new Error();
	}

	if(!background?.scripts) {
		throw new TypeError(bgScriptManifestRequiredMsg.get());
	}

	const bgScriptFileNames = background.scripts;
	const toRemove = (filename as string).replace("[name]", "");

	const bgWebpackEntry = Object.keys(webpackEntry).find(entryName =>
		bgScriptFileNames.some(
			bgManifest => bgManifest.replace(toRemove, "") === entryName,
		),
	);

	if(!bgWebpackEntry) {
		throw new TypeError(bgScriptEntryErrorMsg.get());
	}

	const contentEntries: unknown = content_scripts
		? flatMapDeep(Object.keys(webpackEntry), entryName =>
			content_scripts.map(({js}) =>
				js
					.map(contentItem => contentItem.replace(toRemove, ""))
					.filter(contentItem => contentItem === entryName),
			),
		)
		: null;
	return {
		background: bgWebpackEntry,
		contentScript: contentEntries as string[],
		extensionPage: null,
	};
}
