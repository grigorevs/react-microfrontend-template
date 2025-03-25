const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@tests': path.resolve(__dirname, 'src/tests/'),
      '@e2e': path.resolve(__dirname, 'src/e2e/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        todo: 'todo@http://localhost:3001/remoteEntry.js',
        auth: 'auth@http://localhost:3002/remoteEntry.js', 
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        zustand: { singleton: true, eager: true },
      },
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
};