module.exports = {
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
  },
  rootDir: "src",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["<rootDir>/**/*.tsx"],
  coverageThreshold: {
    "./src/pages": {
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ["src/jest.setup.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  coveragePathIgnorePatterns: [
    "src/main.tsx",
  ],
  transformIgnorePatterns: ["/node_modules/(?!@testing-library)"],
  testPathIgnorePatterns: [
    "src/main.tsx",
  ],
};
