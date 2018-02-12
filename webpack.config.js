const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = {
    entry: __dirname + "/index.js", // entry file name
    output: {
        path: __dirname + "/", //where our file should be located
        filename: 'ssr.bundle.js',
    },
    target: "node", //tells webpack we're in targeting node environment
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(s?css|less)$/, loader: 'ignore-loader'} //ignore all the styles import inside react components
        ]
    },
    externals: [nodeExternals()], //it's hard to webpack to keep standard common.js require() statement
    plugins: [
        //provide isomorphic-fetch package as fetch api, since right now it's not supported
        new webpack.ProvidePlugin({
            "fetch": "isomorphic-fetch"
        })
    ],
};

module.exports = config;