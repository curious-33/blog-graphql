require("./database");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const graphQLSchema = require("./schema");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	"/graphql",
	graphqlHTTP({
		schema: graphQLSchema,
		graphiql: process.env.NODE_ENV === "development",
	})
);

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`*** ENV: ${process.env.NODE_ENV} ***`);
	console.log(`App is running on the port ${port}`);
});
