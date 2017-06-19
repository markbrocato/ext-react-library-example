const webpack = require('webpack');
const path = require('path');
const ExtReactWebpackPlugin = require('@extjs/reactor-webpack-plugin');
const sourcePath = path.join(__dirname, './src');

module.exports = function (env) {
    const plugins = [
        new ExtReactWebpackPlugin({
            production: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            }
        })
    ];

    return {
        devtool: 'source-map',
        context: sourcePath,

        entry: [
            './index.js'
        ],

        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader'
                    ]
                }
            ]
        },

        resolve: {
            // The following is only needed when running this boilerplate within the extjs-reactor repo.  You can remove this from your own projects.
            alias: {
                "react-dom": path.resolve('./node_modules/react-dom'),
                "react": path.resolve('./node_modules/react')
            }
        },

        plugins,

        stats: {
            colors: {
                green: '\u001b[32m',
            }
        }
    };
};