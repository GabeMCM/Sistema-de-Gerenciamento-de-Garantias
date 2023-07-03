const mongoose = require("mongoose");

const connectDatabse = () => {
	console.log("Wait connectiong to the database");
	mongoose
		.connect(
			process.env.DB_URI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log("MongoDB Atlas Connected"))
		.catch((error) => console.log(error));
};

module.exports = connectDatabse;
