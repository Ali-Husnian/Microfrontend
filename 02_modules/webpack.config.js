const path = require("path");
module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundel.js",
    path: path.resolve(__dirname, "dist"),
  },
};
