Sofweb
===============
Sofweb is an open-source solution for developing sleek cross-platform applications.

It combines the best tools and frameworks, solves the common issues with connecting them and provides a robust solution to support daily development needs.

If you want to build sleek cross-platform applications by writing one codebase which runs anywhere, this is a solid starting point.

Sofweb mainly uses web-technologies, check the technologies list below for more information.

Quick-start
=============
Clone the repository: `git clone https://github.com/israelg99/Sofweb.git`

Move into it `cd Sofweb`

Install all needed packages: `npm install`

You're ready to roll.

Scripts
=========
*Check `package.json` for the full list of scripts and adding your own.*

`npm run webpack` - Runs the webpack in development mode, outputs everything into `src/dist`

`npm run production` - Runs the webpack in production mode, outputs everything into `src/build`

`npm run electron` - Runs electron, by default it calls `src/dist/index.js`

### Brief explanation on the webpack configs

First it uses the `config/webpack/webpack.config.js` to determine which config to run in respect to your mode.

The appropriate config merges `webpack.commong.js` and deletes `src/build`(production) or `src/dist`(development) and then it does the standard packing.

Lastly in production mode your file names are hashed and content is uglified.


Technologies
===============

#### JavaScript

#### TypeScript

------------

#### Angular 2

#### Electron

------------

### Webpack
- DevServer
- CommonsChunkPlugin
- HtmlWebpackPlugin
- CopyWebpackPlugin
- OccurenceOrderPlugin
- DedupePlugin
- NoErrorsPlugin
- HotModuleReplacementPlugin
- ExtractTextPlugin
- UglifyJsPlugin
- CleanWebpackPlugin

------------

#### Bootstrap

#### SASS SCSS

#### HTML5

------------

### Testing
*To be updated*

Tasks
=======
### Testing and coverage (partially working for me locally)
- [ ] Karma
- [ ] Jasmine
- [ ] Istanbul

Maintainers
===============
Israel Gilyadov <israelg99@gmail.com>
