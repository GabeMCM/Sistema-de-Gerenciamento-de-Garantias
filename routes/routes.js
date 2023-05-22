const routes = require("express").Router();
const TaskController = require("../controller/TaskControler");

routes.get("/", TaskController.getAll);

module.exports = routes;
