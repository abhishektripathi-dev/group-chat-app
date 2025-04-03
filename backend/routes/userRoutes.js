const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userController.signup);
// routerr.post('/signin',)

module.exports = router;
