const express = require("express");
const {
    registerValidation,
    loginValidation,
} = require("../validations/authValidations");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

router.post("/sign-up", registerValidation, registerUser);
router.post("/sign-in", loginValidation, loginUser);

module.exports = router;
