const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.getAll);
route.post("/save", userController.save);

module.exports = route;
