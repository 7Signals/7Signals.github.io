import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import Dashboard from 'webpack-dashboard'
// import DashboardPlugin from 'webpack-dashboard/plugin'

// const dashboard = new Dashboard()
const devPort = 9000
const nodeEnv = process.env.NODE_ENV || 'development'
const isProduction = nodeEnv === 'production'

const cssUse = isProduction ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader']
}) : ['style-loader', 'css-loader']

const pluginsList = isProduction ? [
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
    plugins: pluginsList,
    devServer: {
        open: false, // to open the local server in browser
        contentBase: __dirname + '/src',
        compress: true,
        port: devPort,
        // quiet: true, // important
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        overlay: {
            warnings: true,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    devtool: "eval-source-map" // Default development sourcemap
};

// Check if build is running in production mode, then change the sourcemap type
if (isProduction) {
    config.devtool = "source-map";

    // Can do more here
    // JSUglify plugin
    // Offline plugin
    // Bundle styles seperatly using plugins etc,
}

module.exports = config;