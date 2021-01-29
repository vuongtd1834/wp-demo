const express = require("express")
const webpack = require("webpack")
const webpackDevMiddleWare = require("webpack-dev-middleware")

const app = express()
const config = require("../webpack/webpack.config.js")
const complier = webpack(config)

app.use(
    webpackDevMiddleWare(complier,
        {
            publicPath: config.output.publicPath
        })
)

app.listen(3000, function () {
    console.log('Server is running port 3000!')
})