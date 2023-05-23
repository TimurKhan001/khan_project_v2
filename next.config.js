const { i18n } = require('./next-i18next.config');

module.exports = {
	i18n,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.S3_BUCKET,
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};
