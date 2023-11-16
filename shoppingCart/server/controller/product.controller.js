import Product from "../model/product.model.js"


export const addProduct = async (req, res) => {
    try {
        const newProduct = await Product.create({ userId: req.userId, ...req.body })
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        next(error)
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})
        res.status(200).json({ success: true, data: allProducts })
    } catch (error) {
        next(error)
    }
}