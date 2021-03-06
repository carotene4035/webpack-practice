module.exports = {

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  mode: 'development',

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: 'main.js'
  },

  // devServerの設定
  devServer: {
    contentBase: 'dist',
    open: true,
    proxy: {
      "/api": {
        target: "sample",
        pathRewrite: {"^/api" : ""}
      }
    }
  }
};

