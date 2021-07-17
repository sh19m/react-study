const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // 開発用モードで出力
    mode: "development",
    // メインとなるファイル
    entry: './src/ts/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.styl?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        port: 8080,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        })
    ],
};
