import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, "artifacts/portfolio/src");

function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, callback);
    } else if (filepath.endsWith(".tsx") || filepath.endsWith(".ts")) {
      callback(filepath);
    }
  });
}

const replacements = [
  { regex: /\[#0A0A0A\]/g, replacement: "card" },
  { regex: /\[#050505\]/g, replacement: "background" },
  { regex: /\[#1F2937\]/g, replacement: "border" },
  { regex: /\[#F0F0F0\]/g, replacement: "foreground" },
  { regex: /\[#6B7280\]/g, replacement: "muted-foreground" },
  { regex: /\[#FF00A0\]/g, replacement: "primary" },
  { regex: /\[#00F0FF\]/g, replacement: "secondary" },
];

walk(srcDir, (filepath) => {
  let content = fs.readFileSync(filepath, "utf8");
  let newContent = content;

  replacements.forEach(({ regex, replacement }) => {
    newContent = newContent.replace(regex, replacement);
  });

  if (content !== newContent) {
    fs.writeFileSync(filepath, newContent, "utf8");
    console.log(`Updated ${filepath}`);
  }
});
