'use strict';

const webpack = require('webpack');

const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common');

const dirpath = require('../helpers/dirpath')
const root = require('../helpers/root')


const config = merge(
    common,

    // devServer({
    //     // Customize host/port here if needed
    //     host: process.env.HOST,
    //     port: process.env.PORT
    // }),

    {
        devtool: 'source-map',

        output: {
            path: dirpath.PATHS.build.path,
            publicPath: dirpath.PATHS.build.path,
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js',
            sourceMapFilename: '[name].js.map'
        },

        plugins: [
            new ExtractTextPlugin('[name].[hash].scss'),
            new webpack.optimize.UglifyJsPlugin(),

            new CleanWebpackPlugin([dirpath.PATHS_REL.build.path], {
                root: root(),
                verbose: true,
                dry: false,
                exclude: []
            })
        ]
    }
);

module.exports = config;
