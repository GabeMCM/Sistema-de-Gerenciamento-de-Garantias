const mongoose = require("mongoose");

const connectToDb = () => {
	mongoose
		.connect(
			"mongodb+srv://adm:123@cluster0.f9glqkb.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log("MongoDB Atlas CONECTADO"))
		.catch((err) => console.log(err));
};

module.exports = connectToDb;
