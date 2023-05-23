const mongoose = require("mongoose");

const connectDatabse = () => {
	console.log("Wait connectiong to the database");
	mongoose
		.connect(
			"mongodb+srv://adm:123@cluster0.f9glqkb.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log("MongoDB Atlas Connected"))
		.catch((error) => console.log(error));
};

module.exports = connectDatabse;
