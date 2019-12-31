const path = require('path');
const HTMLWebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.build.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: [
                                'last 2 versions',
                                'not dead',
                                "not < 2%",
                                "not ie 11"
                            ],
                            useBuiltIns: 'entry'
                        }],
                        '@babel/preset-react'],
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackplugin({
            template: './src/index.html'
        })
    ]
}