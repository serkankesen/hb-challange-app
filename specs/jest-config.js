const { defaults } = require("jest-config");
module.exports = {
    verbose: true,
    roots: ["../specs"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
    transformIgnorePatterns: [
        "<rootDir>/bower_components/",
        "<rootDir>/node_modules/",
        "<rootDir>/src/assets/",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["<rootDir>/setup-tests.js"],
};
