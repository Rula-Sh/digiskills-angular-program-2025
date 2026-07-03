const path = require("path");

module.exports = {
  mode: "development", // Development mode
  entry: "./src/app.ts", // Starting point (TypeScript file) => was "./src/app.ts" updated by me
  output: {
    filename: "app.js", // Output file
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"], // Recognize both .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader", // Use awesome-typescript-loader to process TypeScript
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // ✅ Serve static files from "dist"
    },
    port: 3001, // ✅ Corrected lowercase "port"
    open: true, // ✅ Automatically open browser
    hot: true, // ✅ Enable hot module replacement
  },
};
