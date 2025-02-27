const {resolve} = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { ExtensionReloader } = require("../dist/webpack-extension-reloader");

const mode = process.env.NODE_ENV;
module.exports = {
	mode,
	devtool: "inline-source-map",
	entry: {
		"content-script": "./sample/plugin-src/my-content-script.js",
		background: "./sample/plugin-src/my-background.js",
		popup: "./sample/plugin-src/popup.js"
	},
	output: {
		publicPath: ".",
		path: resolve(__dirname, "dist/"),
		filename: "[name].bundle.js",
		libraryTarget: "umd"
	},
	plugins: [
		/***********************************************************************/
		/* By default the plugin will work only when NODE_ENV is "development" */
		/***********************************************************************/
		new ExtensionReloader({
			entries: {
				contentScript: "content-script",
				background: "background",
				extensionPage: "popup"
			}
			// Also possible to use
			// manifest: resolve(__dirname, "manifest.json")
		}),

		new MiniCssExtractPlugin({filename: "style.css"}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from:
						process.env.NODE_ENV === "development"
							? "./sample/manifest.dev.json"
							: "./sample/manifest.prod.json",
					to: "manifest.json"
				},
				{from: "./sample/plugin-src/popup.html"},
				{from: "./sample/icons"}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader"
				]
			},
			{
				test: /\.txt$/,
				use: "raw-loader"
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	}
};
