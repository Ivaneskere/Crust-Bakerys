import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        image: String,
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);