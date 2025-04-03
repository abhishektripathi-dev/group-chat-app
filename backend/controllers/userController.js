const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "../.env" });

exports.signup = async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            phone,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).json({ message: "User already exists" });
        }
        res.status(500).json({ message: "Internal server error" });
    }   
};
