const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: "inline-source-map",
  mode: isDevelopment ? "development" : "production",
  entry: [path.resolve("src/index.jsx")],
  output: {
    clean: true,
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    open: true,
    hot: true,
    historyApiFallback: true,
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Container",
      remotes: {
        Product: "Product@http://localhost:3001/product.js",
        RelatedProducts:
          "RelatedProducts@http://localhost:3002/related-products.js",
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve("public/index.html"),
      filename: "index.html",
      chunksSortMode: "none",
    }),
  ],
};
