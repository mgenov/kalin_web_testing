const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTexPlugin = require('extract-text-webpack-plugin');


module.exports = {

entry: {
app : "./src/js/app.js"
  
},
output: {
   
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    publicPath: 'dist'
  

}, 

devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/dist/',
        inline: true,
        hot: true, 
      

  }, 
  mode: 'development',
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
                    use : [ 'style-loader',
                    'css-loader',
                    'sass-loader',
                ]          
        },
      
        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.(jpg|png|svg|gif)$/,
            use:  'file-loader',
            
        },

        {
            include: [path.resolve(__dirname, 'src')],
            test: /\.html$/,
            use: ['html-loader']
},
  
        
        
    ]
},
plugins: [
    //new HtmlWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  //new ExtractTexPlugin("calc.css")

],


};
 