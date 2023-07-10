const { GraphQLObjectType, GraphQLString } = require("graphql");

const { userType } = require("../type");
const UserModel = require("../../model/user.model");

const createUserMutation = {
	type: userType.UserResponseType,
	args: {
		username: { type: GraphQLString },
		email: { type: GraphQLString },
	},
	async resolve(parent, args) {
		const username = args.username.trim();
		if (username.length > 0) {
			const newUser = new UserModel({ username, email: args.email });
			const result = await newUser.save();

			return {
				status: 201,
				data: result,
				message: "success",
			};
		}

		return {
			status: 400,
			data: null,
			message: "Username is required",
		};
	},
};

const updateUserMutation = {
	type: userType.UserResponseType,
	args: {
		id: { type: GraphQLString },
		username: { type: GraphQLString },
		email: { type: GraphQLString },
	},
	async resolve(parent, args) {
		const username = args.username.trim();
		if (username.length > 0) {
			const result = await UserModel.findOneAndUpdate(
				{
					_id: args.id,
				},
				{ username, email: args.email },
				{ new: true }
			);

			return {
				status: 200,
				data: result,
				message: "success",
			};
		}

		return {
			status: 400,
			data: null,
			message: "Username is required",
		};
	},
};

const deleteUserMutation = {
	type: userType.UserResponseType,
	args: {
		id: { type: GraphQLString },
	},
	async resolve(parent, args) {
		if (args.id) {
			const result = await UserModel.findOneAndDelete({
				_id: args.id,
			});

			console.log({ result });

			if (result) {
				return {
					status: 200,
					data: null,
					message: "User has been successfully deleted",
				};
			} else {
				return {
					status: 404,
					data: null,
					message: "A user doesn't exist",
				};
			}
		}

		return {
			status: 400,
			data: null,
			message: "ID is required",
		};
	},
};

module.exports = {
	createUserMutation,
	updateUserMutation,
	deleteUserMutation,
};
