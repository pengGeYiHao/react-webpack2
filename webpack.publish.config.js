
var webpack=require("webpack");
var path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
var SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {

    entry:{
        app:path.resolve(__dirname,'src/index.js'),
        vendor:['react','react-dom','react-router']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].min.js',
    },
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
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader?minimize'
                })
            },
            {
                test: /\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {
                            loader:'css-loader?minimize'
                        },
                        {
                            loader:'sass-loader'
                        }
                    ]
                })
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            filename:'vendor.bundle.js'
        }),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new CopyWebpackPlugin([
            {
                from:'src/images',
                to:'images'
            }
        ]),
        new ImageminPlugin({ test: 'images/**' }),
        new SpritesmithPlugin({
            src: {
                cwd: path.resolve(__dirname, 'src/sprites'),
                glob: '*.*'
            },
            target: {
                image: path.resolve(__dirname, 'src/images/sprite.png'),
                css: path.resolve(__dirname, 'src/style/mixins/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "/images/sprite.png"
            },
            spritesmithOptions: {
                algorithm: 'left-right'
            }
        })
    ]

}