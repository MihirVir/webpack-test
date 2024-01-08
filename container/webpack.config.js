const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: "development",
    devServer: {
        port: 8001
    },
    plugins: [
        new ModuleFederationPlugin({
            // name is not used for Host
            name: "container",
            // It controls how webpack is going to try to decide 
            // whether or not to load that remoteEntry.js file
            remotes: {
                products: "products@http://localhost:8000/remoteEntry.js",
                cart: "cart@http://localhost:8002/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}