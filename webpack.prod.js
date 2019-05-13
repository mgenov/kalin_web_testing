
const webpack = require('webpack');
const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Obfuscator = require('webpack-obfuscator');
const MinifyCss = require('mini-css-extract-plugin');

module.exports = {

entry: {
app : "./src/js/app.js",


},
output: {
   
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    publicPath: 'dist'

},
 

  mode: 'production',
module : {
    rules: [  
        {
            include: [path.resolve(__dirname, 'src')],
    

            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                    {
                        loader: 'babel-loader',
                       
                    }             
                ]   
        },

        {
            include: [path.resolve(__dirname, 'src')],
    
            test: /\.(scss|css)$/,
            
                  
                    use : [ 'style-loader','css-loader','sass-loader',]
                    
                
                       
                  
        },
      
        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.(jpg|png|svg|gif)$/,
            use: 'file-loader',
        },
        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.html$/,
            use: ['html-loader']
},
    ]
},


 plugins: [
    new Obfuscator({
        rotateUnicodeArray: true
    },  []),
   /*  new MinifyCss ({
        filename: '[name].bundle.js',

    },),  */
    
],

};
 