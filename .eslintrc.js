module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "react/jsx-filename-extension": ["warning", { extensions: [".tsx"] }],
    "@typescript-eslint/explicit-function-return-type": "off"
  }
};
