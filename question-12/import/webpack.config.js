//specify webpack setup
//options object for how you want webpack to work

const path = require('path'); //build in module - requires the module from the node library

module.exports = { 
    //entry: relative path to index - single string value
    //output: an object, because we specify more things
    entry: './src/index.js',
    output:{ 
        //path: absolute URL - where we save/ where the file is located on the computer relative to the root of the computer.
        //filename: what we save the file as
        //dirname: gives absolute path, up until the root directory of the project
        path: path.resolve(__dirname, 'dist/assets'), 
        filename: 'bundle.js'
    } 
}; 