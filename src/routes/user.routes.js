const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/", userController.getAll);
route.post("/save", userController.save);
route.get("/show/:status/getById/:id/:method", userController.getById);
route.post("/update/:id", userController.updateItem);
route.get("/delete/:id", userController.delItem);
route.get("/show/:status", userController.showInfo);

module.exports = route;
