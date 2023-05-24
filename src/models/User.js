const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	lojas: {
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
		type: Number,
		require: true,
	},
	produto: {
		type: String,
		require: true,
	},
	codFornecedor: {
		type: Number,
		require: true,
	},
	fornecedor: {
		type: String,
		require: true,
	},
	nfCompra: {
		type: Number,
		require: true,
	},
	emissaoNfCompra: {
		type: String,
		require: true,
	},
	codigoProdutoFornecedor: {
		type: Number,
		require: true,
	},
	quantidade: {
		type: Number,
		require: true,
	},
	valorUniNota: {
		type: Number,
		require: true,
	},
	descDefeito: {
		type: String,
		require: true,
	},
	nfVenda: {
		type: Number,
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
		type: Number,
		require: true,
	},
	nfGarantia: {
		type: Number,
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
		type: Boolean,
		require: true,
	},
	dataSave: {
		type: Date,
		default: Date.now(),
	},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
