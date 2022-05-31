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
    open: false,
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
      name: "React micro application",
      library: { type: "var", name: "ReactMicroApplication" },
      filename: "react-micro-application.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve("public/index.html"),
      filename: "index.html",
      chunksSortMode: "none",
    }),
  ],
};
