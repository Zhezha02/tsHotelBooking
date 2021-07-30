const path = require("path");
module.exports = {
  watch: true,
  entry: {
    main: path.resolve(__dirname, "build", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../public/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

};
