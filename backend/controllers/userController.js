const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");

require("dotenv").config({ path: "../.env" });

exports.signup = async (req, res) => {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const existingUser = await User.findOne({
            where: { [Sequelize.Op.or]: [{ phone }, { email }] },
        });

        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            phone,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "User not authorized" });
        }

        res.status(200).json({
            message: "User login successful",
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "An error occuered while logging in" });
    }
};
