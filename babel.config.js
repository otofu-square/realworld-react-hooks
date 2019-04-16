if (process.env.NODE_ENV !== "stylelint") {
  module.exports = {
    presets: ["next/babel", "@zeit/next-typescript/babel"],
    plugins: ["emotion"]
  };
}
