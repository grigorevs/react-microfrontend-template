const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3001/'
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
      name: 'app1',
      remotes: {
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
      // shared: {
      //   react: { singleton: true, eager: false },
      //   'react-dom': { singleton: true, eager: false },
      //   zustand: { singleton: true, eager: false },
      // },
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3001,
    hot: true,
  },
};