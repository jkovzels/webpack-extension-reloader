import {install} from "source-map-support";
import {DEBUG, ERROR, NONE} from "./constants/log.constants";
import ExtensionReloaderImpl from "./ExtensionReloader";
import {setLogLevel} from "./utils/logger";

install();

const logLevel: LOG_LEVEL = {
	development: DEBUG,
	production: ERROR,
	test: NONE,
}[process.env.NODE_ENV ?? ERROR];


setLogLevel(logLevel);
export = ExtensionReloaderImpl;
