const user = require("../models/User");

//MÉTODOS DA ROTA
////Método de buscar todos os dados
const getAll = async (req, res) => {
	try {
		const dataList = await user.find();
		return res.render("index", { dataList });
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const getById = async (req, res) => {
	const list = user.findOne({ _id: req.params.id });
	const dataList = await user.find();
	res.render("index", { list, dataList });
};

////Método de salvar os dados e mandar para o banco de dados
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
	getById,
};
