module.exports = {
  plugins: ["react-hooks"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["warning", { extensions: [".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};
