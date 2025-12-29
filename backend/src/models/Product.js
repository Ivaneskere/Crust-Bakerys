import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  slogan: String,
  price: Number,
  image: String,
  description: String,
  nutrition: String,
  category: String,
});

export default mongoose.model("Product", productSchema);
