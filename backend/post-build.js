const fs = require("fs-extra");
const path = require("path");

const srcDir = path.join(__dirname, "src", "graphql", "types");
const distDir = path.join(__dirname, "dist", "graphql", "types");
console.log(srcDir, distDir, __dirname);
fs.copy(srcDir, distDir)
  .then(() => console.log("graphql files copied successfully!"))
  .catch((err) => console.error("Error copying HTML files:", err));
