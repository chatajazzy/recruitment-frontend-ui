const webpack = require('webpack'),
      path    = require('path');
 
const srcPath  = path.join(__dirname, '../src/js'),
      distPath = path.join(__dirname, '../src/js');
 
module.exports = {
    watch: true,
    cache: true,
    context: srcPath,
    entry: {
        app: './index.js',
    },
    mode: 'development',
    output: {
        path: distPath,
        filename: 'main.js',
    },
    resolve: {
        modules: ["node_modules"],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
