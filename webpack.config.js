const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    task: './src/task.js',
    note: './src/note.js',
    initialLoad: './src/initialLoad.js',
    taskLoad: './src/taskLoad.js',
    formLoad: './src/formLoad.js',
    taskForm: './src/taskForm.js',
    projectForm: './src/projectForm.js',
    noteForm: './src/noteForm.js',
    EventListeners: './src/EventListeners.js',
    storageAvailable: './src/storageAvailable.js',

  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do List',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.svg$/, 
        loader: 'svg-inline-loader' 
      },
    ],
  },
};