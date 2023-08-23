const thresholds = {
	output: 'html',
	performance: 90,
	accessibility: 90,
	'best-practices': 90,
	seo: 90,
	'first-contentful-paint': 2000,
};

const lightHouseOptions = {};
const lighthouseConfig = {
	output: 'html',
};

describe('My performance audit', () => {
	it('should pass the audits', () => {
		cy.visit('http://localhost:3000/projects'); // Your Next.js app URL
		cy.lighthouse();
	});
});
