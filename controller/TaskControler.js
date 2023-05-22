//MÉTODO DA ROTA
const getAll = (req, res) => {
	return res.render("index");
};

//EXPORTA OS MÉTODOS
module.exports = {
	getAll,
};
