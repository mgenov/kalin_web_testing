const webpack = require('webpack');
const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app : "./src/js/app.js"  
    },
    output: {   
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js",    
    }, 
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),        
        inline: true,
        hot: true,
    },
    mode: 'development',
    module : {
        rules: [
            {            
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',                       
                    }             
                ]   
            },
            {               
                test: /\.(scss|css)$/,
                    use : [ 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]          
            },      
            {            
                test: /\.(jpg|png|svg|gif)$/,
                use:  'file-loader',
                
            },
            {         
                test: /\.html$/,
                use: ['html-loader']
            },                  
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { 
                template: "./src/calc.html",
                filename: "./index.html"
            }
        )
    ]
};
 