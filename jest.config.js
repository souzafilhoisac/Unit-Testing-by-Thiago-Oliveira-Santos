module.exports = {
	moduleFileExtensions: [
		'js',
		'json',
		'ts'
	],
	testRegex: '\\.spec\\.ts$',
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest'
	},
	preset: 'ts-jest',
	moduleNameMapper: {
		'^src/(.*)': '<rootDir>/src/$1',
		'^test/(.*)': '<rootDir/test/$1>',
		'@core/(.*)': '<rootDir/src/core/$1'
	},
	coverageDirectory: './coverage',
	collectCoverageForm: [
		'./src/*.ts',
		'./src/**/*.ts',
		'./src/*.js',
		'./src/**/*.js'
	],
	testEnvironment: 'node',
	setupFilesAfterEnv: [
		'jest-extended/all',
		'<rootDir/test/setup.ts>'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80
		}
	}
};
