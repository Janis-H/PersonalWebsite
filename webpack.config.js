const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    port: 8080,
    publicPath: path.resolve(__dirname, "/dist/"),
    proxy: {
      "/": "http://localhost:3000"
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
        test: /\.(s[ac]ss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ["file-loader"],
      }
    ],
  },
}
