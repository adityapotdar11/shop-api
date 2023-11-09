const express = require("express");
const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", authMiddleware, productRoutes);

module.exports = router;
