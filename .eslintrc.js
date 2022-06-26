module.exports = {
    root: true,
    extends: "@react-native-community",
    parser: "@typescript-eslint/parser",
    rules: {
        "prettier/prettier": 0,
        "comma-dangle": ["warn", "never"],
        "@typescript-eslint/no-unused-vars": 0,
        "quotes": ["warn", "double"]
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/no-shadow": ["error"],
                "no-shadow": "off",
                "no-undef": "off"
            }
        }
    ]
};
