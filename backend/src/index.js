import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

// путь к папке с JSON
const dataDir = path.resolve("../frontend/DB");

// helper для чтения JSON
function readJSON(fileName) {
  const filePath = path.join(dataDir, fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// PRODUCTS
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

    return res.json(allProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ORDERS (временно в памяти)
let orders = [];

app.post("/orders", (req, res) => {
  const { customerName, phone, address, email, items, totalPrice, totalQuantity, notes } = req.body;

  if (!customerName || !phone || !address || !items || items.length === 0) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const order = {
    id: Date.now().toString(),
    customerName,
    phone,
    address,
    email,
    items,
    totalPrice,
    totalQuantity,
    notes,
    createdAt: new Date(),
    status: "pending",
  };

  orders.unshift(order);
  res.status(201).json({ message: "Order created", order });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/orders/:id", (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});
