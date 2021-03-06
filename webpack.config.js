
/**
 * Created by wangjing on 3/4/2017.
 */

var webpack = require('webpack');
var path = require('path');
//#resolve可以把相对路径转换成绝对路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './app/main.jsx');
var BUILD_PATH = path.resolve(__dirname, './build');

//输出HTML和CSS等等文件到路径的插件
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    //配置热替换服务器,每次改变JS文件都会自动AJAX刷新浏览器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './app',
        port: 9121
    },

    //入口文件,需要处理的文件路径
    entry: [
        // './components/index.js',
        APP_PATH,
       // 'webpack/hot/dev-server',
       // 'webpack-dev-server/client?http://localhost:9121',
        //上面2个是开发的时候用的热替换服务器
    ],
    //输出文件位置
    output: {
        //绝对路径,用于输出到位置
        path: BUILD_PATH,
        //服务路径,用于热替换服务器
        publicPath: '/one-day/',
        //输出文件名
        filename: 'bundle.js'
    },
    //模块
    module: {
        //webpack的核心,所有的文件通过loader来处理编译
        loaders: [
            //js
            {
                //首先匹配文件后缀
                test: /\.js[x]?$/,
                //然后指定作用范围,这里可不写,但是范围越小速度越快
                include: path.resolve(__dirname, 'app'),
                //排除目录,exclude后将不匹配
                exclude: /node_modules/,
                //加载的loader,上面匹配到的文件都通过下面的loader来处理编译,这里是babel-es6+react
                loader: 'babel-loader',
                query:{
                    presets:['es2015','react'],
                    plugins: ['transform-runtime', ['import', {
                        libraryName: 'antd',
                        style: 'css' // or true or css 这里必须是 css，否则样式不能加载
                    }]]
                }
            },
            {
                test: /\.sass/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
            },
            //.css 文件使用 style-loader 和 css-loader 来处理
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader'
            },
            //图片文件使用url-loader 处理 '?limit=8192'表示将所有小于8kb的图片都转为base64形式
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000&name=images/[hash:8].[name].[ext]'
            },
            // {
            //     test: /\.jpg$/, loader: "file-loader?name=img/[hash:8].[name].[ext]"
            // },
            {
                test: /\.svg$/, loader: 'svg-url-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: [' ','.js','.jsx','.json']
    },
    //插件
    plugins: [
        //热替换插件
        new webpack.HotModuleReplacementPlugin(),
        //输出文件插件,最顶上有引入
        new CopyWebpackPlugin([
            { from: './app/index.html', to: 'index.html' }
        ])
        //以下代码为压缩代码插件,在打包的时候用,开发环境下会减慢编译速度
        //new webpack.optimize.UglifyJsPlugin({
        //    这里是去除错误提示的配置,具体看webpack文档
        //    compress: {
        //        warnings: false
        //    }
        //}),
    ]
};