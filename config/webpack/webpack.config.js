'use strict';

const WebpackTargetElectronRenderer = require('webpack-target-electron-renderer');

let config

switch (process.env.NODE_ENV) {
    case 'production':
        config = require('./webpack.prod');
    break;

    case 'test':
        config = require('./webpack.test');
    break;

    case 'development':
    default:
        config = require('./webpack.dev');
}

config.target = WebpackTargetElectronRenderer(config);
module.exports = config
