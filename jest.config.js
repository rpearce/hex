module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/source/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/source/@types'],
  moduleNameMapper: {},
  preset: 'ts-jest',
  setupFilesAfterEnv: [],
  verbose: true,
}
