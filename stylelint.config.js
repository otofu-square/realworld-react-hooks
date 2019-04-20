module.exports = {
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "order/properties-alphabetical-order": true,
    "declaration-empty-line-before": false
  }
};
