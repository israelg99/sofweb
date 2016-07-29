'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dirpath = require('../helpers/dirpath')


const common = {
    entry: {
        'polyfills': dirpath.PATHS.entry.file('polyfills.ts'),
        'vendor': dirpath.PATHS.entry.file('vendor.ts'),
        'app': dirpath.PATHS.entry.file('app.ts')
    },

    resolve: {
        extensions: ['', '.js', '.ts'],
        root: dirpath.PATHS.src.path,
        modulesDirectories: [dirpath.PATHS_REL.modules.path]
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                loaders: ['ts-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                include: dirpath.INCLUDE,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|dll)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                exclude: dirpath.PATHS.app.path,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            },
            {
                test: /\.scss$/,
                include: dirpath.PATHS.app.path,
                loaders: ['sass-loader', 'css-loader', 'to-string-loader'].reverse()
            },
            {
                test: /\.json$/,
                include: dirpath.INCLUDE,
                loader: 'json-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor', 'app'].reverse()
        }),

        new HtmlWebpackPlugin({
            template: dirpath.PATHS.src.file('window/index.html'),
            chunksSortMode: 'dependency'
        }),

        new CopyWebpackPlugin([{
            from: path.join(dirpath.PATHS.src.path, 'window', 'index.js')
        }]),

        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin()
    ],

    node: {
        global: 'window',
        crypto: 'empty',
        progress: false,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
}

module.exports = common;
