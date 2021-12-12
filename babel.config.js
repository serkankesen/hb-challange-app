module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-react",
    ],
    plugins: [
        "react-hot-loader/babel",
        "transform-object-rest-spread",
        "@babel/plugin-proposal-object-rest-spread",
    ],
};
