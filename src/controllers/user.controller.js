const { User, Auth } = require("../models/User");
const dataUtils = require("../utils/data.utils");
const filterUtils = require("../utils/filters.utils");

//Método de inicio
const open = (req, res) => {
	res.render("login");
};

//Método de autenticação simples
const login = async (req, res) => {
	try {
		const dataUser = await Auth.find();
		const { user, pass } = req.body;
		if (dataUser[0].user === user && dataUser[0].pass === pass) {
			res.redirect("/All");
		} else {
			res.status(401).send("user not founded")
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método de salvar os dados e mandar para o banco de dados
const save = async (req, res) => {
	const list = req.body;
	await dataUtils.processedList(list);

	try {
		await User.create(list);
		res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método de buscar todos os dados
const getAll = async (req, res) => {
	try {
		const { status } = req.params;

		if (status === "All") {
			const dataList = await User.find();
			return res.render("index", {
				dataList,
				item: null,
				itemDel: null,
				statusItem: null,
				filter: null,
			});
		} else {
			const statusItem = await User.find({ status });
			return res.render("index", {
				item: null,
				dataList: null,
				statusItem,
				itemDel: null,
				filter: null,
			});
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método para pegar dados pela ID e editar para fazer update
const getById = async (req, res) => {
	try {
		const { method, id, status } = req.params;
		const statusItem = await User.find({ status });

		if (method === "update") {
			const item = await User.findOne({ _id: id });
			return res.render("index", {
				item,
				dataList: null,
				itemDel: null,
				statusItem,
				filter: null,
			});
		} else {
			const itemDel = await User.findOne({ _id: id });
			return res.render("index", {
				item: null,
				dataList: null,
				itemDel,
				statusItem,
				filter: null,
			});
		}
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método de filtrar dados
const filterData = async (req, res) => {
	try {
		const { Fornecedor, Codigo, Descricao } = req.body;
		const dataList = await User.find();
		const filter = filterUtils.filter(Fornecedor, Codigo, Descricao, dataList);

		return res.render("index", {
			item: null,
			dataList: null,
			statusItem: null,
			itemDel: null,
			filter,
		});
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método para dar update nos dados
const updateItem = async (req, res) => {
	try {
		const { id } = req.params;
		const list = req.body;

		await User.updateOne({ _id: id }, list);
		res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

// Método para excluir dados
const delItem = async (req, res) => {
	try {
		const { id } = req.params;
		await User.deleteOne({ _id: id });
		res.redirect("/All");
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
};

module.exports = {
	save,
	getAll,
	getById,
	updateItem,
	delItem,
	filterData,
	login,
	open,
};
