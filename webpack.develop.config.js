
var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        path.join(__dirname,'src/index.js')
    ],


    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'sass-loader'
                    }
                ]
            },
            // {
            //     test: /\.(png|jpg|PNG)$/,
            //     loaders: 'url-loader?limit=2500&name=images/[name].[ext]'
            // }

        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.join(__dirname, "src")
        ],
    },
    devServer:{
        contentBase:path.join(__dirname, "dist"),
        // host: "127.0.0.1",
        port: 3001,
        publicPath: '/',
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new OpenBrowserPlugin({ url: 'http://localhost:3001'})
    ]

}




















































