const express = require("express");
const {
    createProduct,
    getAllProducts,
    getSingleProduct,
} = require("../controllers/productController");
const { createValidation } = require("../validations/productValidation");
const router = express.Router();

router.post("/create", createValidation, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
