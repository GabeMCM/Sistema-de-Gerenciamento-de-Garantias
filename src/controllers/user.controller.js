const userService = require("../models/User");

const getAll = async (req, res) => {
	try {
		const dataList = await userService.find();
		return res.render("index", dataList);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

//MÉTODOS DA ROTA
const save = async (req, res) => {
	const lojas = req.body;

	try {
		await userService.create(lojas);
		return res.redirect("/");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

//EXPORTA OS MÉTODOS
module.exports = {
	save,
	getAll,
};
