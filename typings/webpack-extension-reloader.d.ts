import { Compiler } from "webpack";

export interface IPluginOptions {
  port: number;
  reloadPage: boolean;
  manifest?: string;
  entries?: IEntriesOption;
}

export interface IExtensionReloaderInstance {
  apply(compiler: Compiler): void;
}

export class ExtensionReloader implements IExtensionReloaderInstance {
	constructor(options?: IPluginOptions);
	apply(compiler: Compiler): void;
}