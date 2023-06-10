module.exports = {
	images: {
		formats: ['image/webp', 'image/avif'],
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
