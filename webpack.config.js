const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve("./src/index.jsx"),
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000"
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          },
        },
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ["file-loader"],
      }
    ],
  },
}
