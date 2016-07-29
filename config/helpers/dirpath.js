'use strict';

const path = require('path');

const root = require('../helpers/root')


class DirPath {
    constructor(dirPath) {
        this._path = dirPath
    }

    get path() {
        return this._path
    }

    file(file) {
        return path.join(this._path, file)
    }
}

const PATHS_REL = {
    entry: new DirPath(path.join('config', 'entry')),

    build: new DirPath(path.join('src', 'build')),
    dist: new DirPath(path.join('src', 'dist')),

    src: new DirPath('src'),
    app: new DirPath(path.join('src', 'app')),

    lib: new DirPath('lib'),
    assets: new DirPath(path.join('src', 'assets')),

    modules: new DirPath('node_modules')
}
module.exports.PATHS_REL = PATHS_REL;

const PATHS = {
    entry: new DirPath(root(PATHS_REL.entry.path)),

    build: new DirPath(root(PATHS_REL.build.path)),
    dist: new DirPath(root(PATHS_REL.dist.path)),

    src: new DirPath(root(PATHS_REL.src.path)),
    app: new DirPath(root(PATHS_REL.app.path)),

    lib: new DirPath(root(PATHS_REL.lib.path)),
    assets: new DirPath(root(PATHS_REL.assets.path)),

    modules: new DirPath(root(PATHS_REL.modules.path))
}
module.exports.PATHS = PATHS;

module.exports.INCLUDE = [PATHS.src.path, PATHS.lib.path];
