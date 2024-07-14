const express = require("express");
const UsersController = require("../controllers/users.controller");
const usersController = new UsersController();
const router = express();

router.get("/user", usersController.getAllUsers);

router.post("/user", usersController.createUser)

module.exports = router;
