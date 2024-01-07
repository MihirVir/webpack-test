const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: "development",
    devServer: {
        port: 8001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                products: "products@http://localhost:8000/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}