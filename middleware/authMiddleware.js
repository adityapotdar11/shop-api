const JWT = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");

const authMiddleware = async (req, res, next) => {
    // Get token from header
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Access denied!",
        });
    }

    try {
        const decoded = JWT.verify(token, jwtSecret);
        req.user = decoded.user;
        next();
    } catch (err) {
        return res.status(401).json({
            status: false,
            message: "Access denied!",
        });
    }
};

module.exports = authMiddleware;
