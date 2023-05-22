//MÉTODOS DA ROTA
const create = (req, res) => {
	const user = req.body;
	res.json(user)
};

//EXPORTA OS MÉTODOS
module.exports = {
	create,
};
