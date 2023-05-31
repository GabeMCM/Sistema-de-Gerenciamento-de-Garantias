const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.getAll);
route.post("/save", userController.save);
route.get("getByid", userController.getById);

module.exports = route;
