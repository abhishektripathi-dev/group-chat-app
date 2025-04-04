const jwt = require("jsonwebtoken")
require("dotenv").config({ path: "../.env" });

exports.generateJWToken = (id, email) => {
    const payload = { id, email };
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        console.log(
            "JWT_SECRET_KEY is not defined in the environment variables"
        );
        throw new Error("Server configuration error");
    }

    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};
