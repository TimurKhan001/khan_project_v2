const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');

module.exports = {
	e2e: {
		baseUrl: 'http://localhost:3000', // this is your app
		setupNodeEvents(on, config) {
			on('before:browser:launch', (browser = {}, launchOptions) => {
				prepareAudit(launchOptions);
			});

			on('task', {
				lighthouse: lighthouse((lighthouseReport) => {
					console.log('---- Writing lighthouse report to disk ----');
				}),
				pa11y: pa11y(console.log.bind(console)),
			});
		},
	},
};
