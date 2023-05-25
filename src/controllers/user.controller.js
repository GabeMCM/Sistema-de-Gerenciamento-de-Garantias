const user = require("../models/User");

const getAll = async (req, res) => {
	try {
		const dataList = await user.find();
		return res.render("index", dataList);
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

//MÉTODOS DA ROTA
const save = async (req, res) => {
	const lojas = req.body;

	try {
		await user.create(lojas);
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
