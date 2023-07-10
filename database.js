const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
	.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)
	.then((res) => {
		console.log({
			database: true,
			host: process.env.DB_HOST,
			name: process.env.DB_NAME,
		});
	})
	.catch((error) => {
		console.error("DB CONNECTION ERROR", error);
	});
