module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.S3_BUCKET,
			},
		],
	},
};
