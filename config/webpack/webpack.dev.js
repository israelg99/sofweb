'use strict';

const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common');
const devServer = require('./lib/webpack.devServer')

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
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: dirpath.PATHS.dist.path,
            publicPath: dirpath.PATHS.dist.path,
            filename: '[name].js',
            chunkFilename: '[id].chunk.js',
            sourceMapFilename: '[name].js.map'
        },

        plugins: [
            new ExtractTextPlugin('[name].scss'),

            new CleanWebpackPlugin([dirpath.PATHS_REL.dist.path], {
                root: root(),
                verbose: true,
                dry: false,
                exclude: []
            })
        ]
    }
);

module.exports = config;
