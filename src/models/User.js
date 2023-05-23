const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	loja: {
		type: String,
		require: true,
	},
	data: {
		type: Date,
		require: true,
	},
	responsavel: {
		type: String,
		require: true,
	},
	codInt: {
		type: String,
		require: true,
	},
	produto: {
		type: String,
		require: true,
	},
	codFornecedor: {
		type: String,
		require: true,
	},
	fornecedor: {
		type: String,
		require: true,
	},
	nfCompra: {
		type: String,
		require: true,
	},
	emissaoNfCompra: {
		type: String,
		require: true,
	},
	codigoProdutoFornecedor: {
		type: String,
		require: true,
	},
	quantidade: {
		type: String,
		require: true,
	},
	valorUniNota: {
		type: String,
		require: true,
	},
	descDefeito: {
		type: String,
		require: true,
	},
	nfVenda: {
		type: String,
		require: true,
	},
	emissaoNfVenda: {
		type: String,
		require: true,
	},
	nomeCliente: {
		type: String,
		require: true,
	},
	numOs: {
		type: String,
		require: true,
	},
	nfGarantia: {
		type: String,
		require: true,
	},
	emissaoNfGarantia: {
		type: String,
		require: true,
	},
	observacao: {
		type: String,
		require: true,
	},
	check: {
		type: String,
		require: true,
	},
	dataSave: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model("Task", UserSchema);
