/* eslint-disable */
export default {
	displayName: 'reviews-api',
	preset: '../../jest.preset.js',
	globalSetup: '<rootDir>/jest.global-setup.ts',
	globals: {},
	testEnvironment: 'node',
	transform: {
		'^.+\\.[tj]s$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
			},
		],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/reviews-api',
};
