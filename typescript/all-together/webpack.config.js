module.exports = {
  entry: "./app.ts",
  output: {
    filename: "./bundle.js"
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader"
      }
    ]
  }
};
