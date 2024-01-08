const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    mode: 'development',
    devServer: {
        port: 8000
    },
    plugins: [
        new ModuleFederationPlugin({
            // name of products which is used in remotes: [Arr] of Host
            // ex: products@http://localhost:8000/remoteEntry.js
            name: 'products',
            // name of the manifest file file. 
            filename: 'remoteEntry.js',
            exposes: {
                // which files / modules inside of products project we are going to
                // export to outside world you gotta import it like products/ProductsIndex
                // refer to container/src/bootstrap.js
                // in return of ProductsIndex we are returning index.js
                './ProductsIndex': './src/index'
            },
            shared: ["faker"],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}