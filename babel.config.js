const presets = [
	[
		"@babel/env",
		{
			targets: {
				edge: "17",
				firefox: "60",
				chrome: "67",
				safari: "11.1",
			},
			useBuiltIns: "usage",
			modules: 'commonjs',
		},
	],
];

const plugins = [
	// ["transform-es2015-modules-commonjs"],
	// ["transform-async-to-module-method", {
	// 	"module": "bluebird",
	// 	"method": "coroutine"
	// }],
	"@babel/plugin-transform-modules-commonjs",
	"module:mithril-objectify",
	"@babel/plugin-transform-regenerator",
];

module.exports = {
	presets,
	plugins,
};
