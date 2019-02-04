const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|jpg|png|svg|ico)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            context: "",
            emitFile: true,
            name: "[path][name].[hash].[ext]"
          }
        }
      ]
    });

    return config;
  }
});
