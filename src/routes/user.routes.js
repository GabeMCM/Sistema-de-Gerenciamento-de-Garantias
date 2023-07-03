const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.get("/:status", userController.getAll);
route.post("/save", userController.save);
route.get("/:status/getById/:id/:method", userController.getById);
route.post("/update/:id", userController.updateItem);
route.get("/delete/:id", userController.delItem);
route.post("/filter", userController.filterData);
route.post("/login", userController.login);
route.get("/", userController.open)

module.exports = route;
