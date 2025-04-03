const express = require("express");
const cors = require("cors");

// Load environment variables from .env files
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Database connection
const sequelize = require("./config/database");

// Routes
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Rnables CORS fo all requests

// Routes
app.use("/api", userRoutes);

sequelize
    .sync({ force: false })
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
