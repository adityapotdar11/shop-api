const Product = require("../models/Product");

const createProduct = async (req, res) => {
    try {
        const { title, image, rating, price, description } = req.body;
        const payload = {
            user: req.user.id,
            title,
            image,
            rating,
            price,
            description,
        };
        let product = new Product(payload);
        await product.save();

        return res.status(201).json({
            status: true,
            message: "Product created successfully!",
        });
    } catch (error) {
        return res.status(error.statusCode || 400).json({
            status: false,
            message: error.message || "Something went wrong!",
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            status: true,
            message: "Products fetched successfully!",
            data: products,
        });
    } catch (error) {
        return res.status(error.statusCode || 400).json({
            status: false,
            message: error.message || "Something went wrong!",
        });
    }
};

const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json({
            status: true,
            message: "Product fetched successfully!",
            data: product,
        });
    } catch (error) {
        return res.status(error.statusCode || 400).json({
            status: false,
            message: error.message || "Something went wrong!",
        });
    }
};

module.exports = { createProduct, getAllProducts, getSingleProduct };
