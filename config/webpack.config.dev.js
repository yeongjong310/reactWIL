require('dotenv').config();

const packageConfig = require('../package.json');
const isDevelopment = process.env.NODE_ENV;
const path = require('path');
const __ROOT = process.cwd();
const webpack = require('webpack');
const serverConfig = require('./webpack.config.server');

module.exports = {
  target: ['web', 'es5'],
  context: __ROOT,
  mode:'development',
  devtool: 'eval-source-map',
  devServer: serverConfig,
  entry: {
    main: path.join(__ROOT, './src/index.js'),
  },
  output: {
    filename: 'main.bundle.js',
    path: path.join(__ROOT, './public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      stage: 3,
                      features: {
                        'nesting-rules': true,
                      },
                      browsers: packageConfig.browserslist[isDevelopment],
                      autoprefixer: { grid: true },
                    },
                  ],
                ],
              },
            }
          },
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            comments: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  loose: true,
                  modules: 'auto',
                  targets: packageConfig.browserslist[isDevelopment],
                },
              ],
              [
                '@babel/preset-react',
                {
                  development: isDevelopment,
                },
              ],
            ]
          }
        }
      }
    ]
  }
}