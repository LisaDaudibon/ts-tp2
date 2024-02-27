export default {
    coverageProvider: "v8",
    rootDir: "./tests",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
};