const Product = require("../models/Product");

const createProduct = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "API working",
    });
};

module.exports = { createProduct };
