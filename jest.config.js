module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  testTimeout: 10000,
  testMatch: ["**/_tests_/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
};
