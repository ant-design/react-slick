module.exports = {
  collectCoverage: true,
  coverageReporters: ["text", "cobertura"],
  collectCoverageFrom: ["src/**/*"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "playwright-tests"],
  moduleNameMapper: {
    "@ant-design/react-slick": "<rootDir>/src/index.js"
  }
};
