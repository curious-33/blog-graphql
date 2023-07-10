const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLList,
} = require("graphql");

const UserType = new GraphQLObjectType({
	name: "UserType",
	fields: () => ({
		id: { type: GraphQLString },
		username: { type: GraphQLString },
		email: { type: GraphQLString },
	}),
});

const UserResponseType = new GraphQLObjectType({
	name: "UserResponseType",
	fields: () => ({
		status: { type: GraphQLInt },
		data: { type: UserType },
		message: { type: GraphQLString },
	}),
});

const UserListResponseType = new GraphQLObjectType({
	name: "UserListResponseType",
	fields: () => ({
		status: { type: GraphQLInt },
		data: { type: new GraphQLList(UserType) },
		message: { type: GraphQLString },
	}),
});

module.exports = {
	UserType,
	UserResponseType,
	UserListResponseType,
};
