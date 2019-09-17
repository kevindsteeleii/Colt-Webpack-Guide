const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader', // 3. Injects styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: [
          "html-loader"
        ]
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        use: {
            loader: "file-loader",
            options: {
              name:"[name].[hash].[ext]",
              outputPath: "imgs"
            }
          }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    })
  ]
};