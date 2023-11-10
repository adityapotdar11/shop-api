const express = require("express");
const {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");
const { createValidation } = require("../validations/productValidation");
const router = express.Router();

router.post("/create", createValidation, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/update/:id", createValidation, updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
