module.exports = {
  processors: [
    [
      "stylelint-processor-styled-components",
      {
        moduleName: "@emotion/styled"
      }
    ]
  ],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
    "stylelint-config-prettier"
  ]
};
