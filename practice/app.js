const express = require("express");
const cors = require("cors");

const app = express();

// app.use(cors());

app.get("/data", (req, res) => {
    res.json({ name: "Abhishek Tripathi", age: 28 });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
