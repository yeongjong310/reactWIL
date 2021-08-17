const path = require('path');

module.exports = {
  contentBase: path.join(process.cwd(), './public'), // 정적 콘텐츠를 제공할 위치
  compress: true, // gzip 압축을 사용하여 latency를 줄인다.
  port: process.env.PORT,
  index: 'index.html',
  overlay: true,
  // hot: true,
  watchContentBase: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  clientLogLevel: 'none',
  stats: 'errors-only',
  historyApiFallback: true,
  writeToDisk: true,
}