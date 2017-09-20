import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const env = process.env.NODE_ENV

const cssUse = env === 'production' ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
}) : ['style-loader', 'css-loader']

const pluginsList = env === 'production' ? [
    new ExtractTextPlugin({
        filename: '[name].css'
    })
] : []


var config = {
    context: __dirname + '/src',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["babel-preset-es2015"].map(require.resolve)
                }
            },
            {
                test: /\.(css)$/,
                use: cssUse
            }
        ]
    },
    plugins: env === 'production' ? [
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ] : [],
    devServer: {
        open: true, // to open the local server in browser
        contentBase: __dirname + '/src',
        compress: true,
        port: 9000,
        watchContentBase: true
    },
    devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (env === "production") {
    config.devtool = "source-map";

    // Can do more here
    // JSUglify plugin
    // Offline plugin
    // Bundle styles seperatly using plugins etc,
}

module.exports = config;