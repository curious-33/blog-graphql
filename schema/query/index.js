const { GraphQLObjectType } = require("graphql");

const { getAllUsersQuery } = require("./user.queries");

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		getAllUsers: getAllUsersQuery,
	},
});

module.exports = RootQuery;
