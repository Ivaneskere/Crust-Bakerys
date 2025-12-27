import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
app.use(cors());

// путь к папке с JSON
const dataDir = path.resolve("../frontend/DB");

function readJSON(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

app.get("/products", (req, res) => {
  try {
    const baking = readJSON("Baking.json");
    const pizza = readJSON("Pizza.json");
    const sushi = readJSON("SushiSet.json");
    const hachapuri = readJSON("Hachapuri.json");
    const tortu = readJSON("tortu.json");
    const news = readJSON("new.json");

    const allProducts = [
      ...baking,
      ...pizza,
      ...sushi,
      ...hachapuri,
      ...tortu,
      ...news,
    ];

    res.json(allProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 API running at http://localhost:3000/products");
});
