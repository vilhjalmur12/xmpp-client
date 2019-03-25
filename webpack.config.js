const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' },
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.less$/, use: [
                { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]},
            {   test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, use: 'eslint-loader' }
        ]
    },
    watch: true,
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true,
        disableHostCheck: true
    },
    devtool: 'inline-source-map',
    node: {
        net: 'empty',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'XMPP-chat',
        template: './public/index.html'
    })]
};