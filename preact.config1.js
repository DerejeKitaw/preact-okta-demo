export default function (config, env, helpers) {
	let { index } = helpers.getPluginsByName(config, 'UglifyJsPlugin')[0]
	config.plugins.splice(index, 1)
}