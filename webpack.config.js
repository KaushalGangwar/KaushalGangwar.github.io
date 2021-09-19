const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    mode: 'production',
    entry: './main.css',
    output: {
        path: path.join(__dirname,'/dist')
    },
    module: {
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'main.html',
        template: './index.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
    }),     
    new MiniCssExtractPlugin({filename: "[name].css"}),
    new CopyPlugin({
        patterns: [
          { from: "./assests", to: "./assests" }
        ],
      }),
],
optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }
}