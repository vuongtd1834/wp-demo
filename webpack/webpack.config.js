const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: path.join(process.cwd(), 'src/index.js'),
        another: path.join(process.cwd(), 'src/index.js')
    },
    output: {
        filename: "[name].[hash].js",
        path: path.join(process.cwd(), "build"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "postcss-loader"},
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: path.join(process.cwd(), 'src/index.html'),
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: "./build"
    }
};