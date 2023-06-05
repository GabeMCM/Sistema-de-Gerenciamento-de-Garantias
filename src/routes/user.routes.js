const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.getAll);
route.post("/save", userController.save);
route.get("/getById/:id/:method", userController.getById);
route.post("/update/:id", userController.updateItem);

module.exports = route;
