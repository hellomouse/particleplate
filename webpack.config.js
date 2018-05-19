const path = require('path');

module.exports = {
  entry: './frontend/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      // TypeScript
      ".ts", ".tsx",
      // Vanilla JS
      ".js",
      // CSS
       ".css",
      // JSON
      ".json",
    ]
  },
  module: {
    rules: [
      // TypeScript
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // Vanilla JS
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // PostCSS
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  "target": "web"
};
