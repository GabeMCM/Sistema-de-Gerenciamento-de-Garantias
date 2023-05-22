const Task = require("../models/task");

//MÉTODOS DA ROTA
const getAllTasks = async (req, res) => {
	try {
		const taksList = await Task.find();
		return res.render("index", taksList);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const createTask = async (req, res) => {
	const task = req.body;

	if (!task.task) {
		return res.redirect("/");
	}

	try {
		await Task.create(task);
		return res.redirect("/");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};



//EXPORTA OS MÉTODOS
module.exports = {
	getAllTasks,
	createTask,
};
