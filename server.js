const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnection");
const routes = require("./routes");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`App running on localhost port ${PORT}`);
});
