const path = require('path');                     
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');  

module.exports = {
  mode: 'production', 

  entry: {            
    main: './src/index.js',
    vendor: './src/vendor.js' 
  },

  output: {         
    filename: '[name].[contenthash].js', 
    path: path.resolve(__dirname, 'dist'),
    clean: true 
  },

  module: {
    rules: [
     
      {
        test: /\.css$/i, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'] 
      },
      
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, 
        type: 'asset/resource' 
      },
      // Обработка шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, 
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({   
      template: './src/index.html',
      minify: {
        collapseWhitespace: true, 
        removeComments: true
      }
    }),
    new MiniCssExtractPlugin({  
      filename: '[name].[contenthash].css'
    })
  ],

  optimization: {              
    splitChunks: {
      chunks: 'all'            
    }
  }
};
