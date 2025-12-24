import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Product from './models/Product.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// Order Schema (inline for simplicity)
const orderSchema = new mongoose.Schema({
    customerName: String,
    phone: String,
    address: String,
    email: String,
    items: [{
        id: String,
        name: String,
        quantity: Number,
        price: Number,
        subtotal: Number
    }],
    totalPrice: Number,
    totalQuantity: Number,
    notes: String,
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' } // pending, confirmed, shipped, delivered
})

const Order = mongoose.model('Order', orderSchema)

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

// Create new order
app.post('/orders', async (req, res) => {
    try {
        const { customerName, phone, address, email, items, totalPrice, totalQuantity, notes } = req.body
        
        if (!customerName || !phone || !address || !items || items.length === 0) {
            return res.status(400).json({ error: 'Missing required fields' })
        }
        
        const order = new Order({
            customerName,
            phone,
            address,
            email,
            items,
            totalPrice,
            totalQuantity,
            notes
        })
        
        await order.save()
        res.status(201).json({ message: 'Order created', orderId: order._id, order })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

// Get all orders
app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 })
        res.json(orders)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

// Get order by ID
app.get('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if (!order) return res.status(404).json({ error: 'Order not found' })
        res.json(order)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})