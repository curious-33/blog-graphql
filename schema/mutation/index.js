const { GraphQLObjectType } = require("graphql");

const {
	createUserMutation,
	updateUserMutation,
	deleteUserMutation,
} = require("./user.mutations");

const RootMutation = new GraphQLObjectType({
	name: "RootMutationType",
	fields: {
		createUser: createUserMutation,
		updateUser: updateUserMutation,
		deleteUser: deleteUserMutation,
	},
});

module.exports = RootMutation;
