const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devServer: {
        port: 3010,
        static: { watch: true },
        historyApiFallback: true,
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {loader: 'babel-loader'}
        },
        {
            test: /\.(css|scss)$/,
            use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
/*          miniCssExtractPlugin allow us to have the bundeled css in saparate file
            instead being bundled in (like  just with 'style-loader') */
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new miniCssExtractPlugin()
      ],
/*    another way to to bundle html files is to add to bellow the main index.js file:
      require('file-loader?name=[name].[ext]!./index.html'); */
}