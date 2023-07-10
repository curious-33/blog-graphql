import UserModel from "./user.model.js";
import { HttpException } from "../../helpers/httpException.js";

class UserContoller {
	async getAll(req, res, next) {
		try {
			const users = await UserModel.find().limit(5).sort({ title: 1 });

			res.status(200).json({
				status: 200,
				data: users,
				total: users.length,
			});
		} catch (error) {
			next(error);
		}
	}

	async get(req, res, next) {
		try {
			const { id } = req.params;

			const user = await UserModel.findByIdAndUpdate(id, req.body, {
				new: true,
			});

			if (!user) {
				throw new HttpException(
					404,
					"NOT FOUND",
					"User with this id is not found. Please, check one more again"
				);
			}

			res.json({
				status: 200,
				data: user,
			});
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			const newUser = new UserModel(req.body);

			const result = await newUser.save();

			res.status(200).json({
				status: 201,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	}

	async update(req, res, next) {
		try {
			const { id } = req.params;

			const result = await UserModel.findByIdAndUpdate(id, req.body, {
				new: true,
			});

			if (!result) {
				throw new HttpException(
					404,
					"NOT FOUND",
					"User with this id is not found. Please, check one more again"
				);
			}

			res.json({
				message: "The user is successfully updated",
			});
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		try {
			const { id } = req.params;

			const result = await UserModel.findByIdAndDelete(id);

			if (!result) {
				throw new HttpException(
					404,
					"NOT FOUND",
					"User with this id is not found. Please, check one more again"
				);
			}

			res.status(200).json({
				status: 200,
				message: "The user is successfully deleted",
			});
		} catch (error) {
			next(error);
		}
	}
}

export default new UserContoller();
