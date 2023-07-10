const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserModel = require("../../model/user.model");
const { userType } = require("../type");

const getAllUsersQuery = {
	type: userType.UserListResponseType,
	args: { id: { type: GraphQLString } },
	async resolve(parent, args) {
		if (args) {
			if (args.id) {
				const res = await UserModel.findOne({ _id: args.id }).sort({
					createdAt: -1,
				});
				return {
					status: 200,
					data: [res],
					message: "success",
				};
			}
		}

		const res = await UserModel.find().sort({
			createdAt: -1,
		});
		return {
			status: 200,
			data: res,
			message: "success",
		};
	},
};

module.exports = {
	getAllUsersQuery,
};
