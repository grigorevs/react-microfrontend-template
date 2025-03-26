const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');

module.exports = {

  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  
        use: 'ts-loader', 
        exclude: /node_modules/, 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.tsx',
      },
      shared: {
        // react: { singleton: true, eager: false },
        // 'react-dom': { singleton: true, eager: false },
        // zustand: { singleton: true, eager: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], 
  },
};