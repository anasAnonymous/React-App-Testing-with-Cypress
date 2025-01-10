// module.exports = {
//   testEnvironment: "jsdom", // Ensure a browser-like environment
//   setupFilesAfterEnv: [
//     "<rootDir>/node_modules/@testing-library/jest-dom/extend-expect",
//   ], // Load jest-dom matchers
// };

module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
