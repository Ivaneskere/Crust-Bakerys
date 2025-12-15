import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Product from './models/Product.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB ok");
        app.listen(3000, () => console.log('http://localhost:3000'));
    })
    .catch(e => {
        console.error("Mongo error:", e.message);
        process.exit(1);
    });

// Отриманння даннних з сервера
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (e) {
        res.status(500).json({error: e.message})
    }
    
})