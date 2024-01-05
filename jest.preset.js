const nxPreset = require('@nx/jest/preset').default;
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL || process.env.DATABASE_URL;

module.exports = {
	...nxPreset,
	coverageReporters: ['text', 'html'],
	collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
};
