export default ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	app: {
		keys: env.array('APP_KEYS', ['6b64e25f7cdd34d9b0ab5b7a61a89323', 'abc93f3d7c6e249b0d0a467421b23873']),
	},
});
