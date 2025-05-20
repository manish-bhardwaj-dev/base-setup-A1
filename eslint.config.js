import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        rules: {
            indent: ["error", 4],
            "no-unused-vars": "warn"
        }
    }
];
