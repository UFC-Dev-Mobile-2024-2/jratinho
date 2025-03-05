export default ({ env }) => ({
	'users-permissions': {
		config: {
			jwtSecret: env('JWT_SECRET'),
		},
		session: {
			enabled: true,
			maxAge: 86400000
		}
	},
});