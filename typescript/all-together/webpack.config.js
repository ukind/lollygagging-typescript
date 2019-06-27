module.exports = {
  entry: "./app.ts",
  output: {
    filename: "./bundle.js"
  },
  devtool: "inline-source-map", //add source map for bundle.js
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader" //for build tyepscript with webpack
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: "tslint-loader" //for linting typescript with webpack
      }
    ]
  }
};
