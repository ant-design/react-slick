module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "e2e-tests"],
  moduleNameMapper: {
    "@ant-design/react-slick": "<rootDir>/src/index.js"
  }
};
