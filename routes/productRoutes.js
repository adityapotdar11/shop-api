const express = require("express");
const {
    createProduct,
    getAllProducts,
} = require("../controllers/productController");
const { createValidation } = require("../validations/productValidation");
const router = express.Router();

router.post("/create", createValidation, createProduct);
router.get("/", getAllProducts);

module.exports = router;
