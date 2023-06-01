const user = require("../models/User");

//MÉTODOS DA ROTA
////Método de buscar todos os dados
const getAll = async (req, res) => {
	try {
		const dataList = await user.find();
		return res.render("index", { dataList, item: null});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const getById = async (req, res) => {
	const item = user.findOne({ _id: req.params.id });
	const dataList = await user.find(item);
	res.render("index", { item, dataList });
};

////Método de salvar os dados e mandar para o banco de dados
const save = async (req, res) => {
	const list = req.body;

	try {
		await user.create(list);
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
