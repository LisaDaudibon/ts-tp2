export default {
    coverageProvider: "v8",
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts"
    ],
    rootDir: ".",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};
