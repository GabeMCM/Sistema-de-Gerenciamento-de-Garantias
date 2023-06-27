const user = require("../models/User");

//MÉTODOS DA ROTA
////Método de salvar os dados e mandar para o banco de dados
const save = async (req, res) => {
	const list = req.body;
	try {
		await user.create(list);
		return res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

////Método de buscar todos os dados
const getAll = async (req, res) => {
	try {
		if (req.params.status === "All") {
			const dataList = await user.find();
			return res.render("index", {
				dataList,
				item: null,
				itemDel: null,
				statusItem: null,
			});
		} else {
			const statusItem = await user.find({ status: req.params.status });
			return res.render("index", {
				item: null,
				dataList: null,
				statusItem,
				itemDel: null,
			});
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

////Método para pegar dados pela id e editar para fazer update
const getById = async (req, res) => {
	try {
		const dataList = await user.find();
		const statusItem = await user.find({ status: req.params.status });
		if (req.params.method == "update") {
			const item = await user.findOne({ _id: req.params.id });
			return res.render("index", {
				item,
				dataList: null,
				itemDel: null,
				statusItem,
			});
		} else {
			const itemDel = await user.findOne({ _id: req.params.id });
			return res.render("index", {
				item: null,
				dataList: null,
				itemDel,
				statusItem,
			});
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

////Método para dar update nos dados
const updateItem = async (req, res) => {
	try {
		const list = req.body;
		await user.updateOne({ _id: req.params.id }, list);
		res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

const delItem = async (req, res) => {
	try {
		await user.deleteOne({ _id: req.params.id });
		res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

/*
const showInfo = async (req, res) => {
	try {
		const statusItem = await user.find({ status: req.params.status });
		return res.render("index", {
			item: null,
			dataList: null,
			statusItem,
			itemDel: null,
		});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};
*/

//EXPORTA OS MÉTODOS
module.exports = {
	save,
	getAll,
	getById,
	updateItem,
	delItem,
};
