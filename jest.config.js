module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
