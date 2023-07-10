const mongoose = require("mongoose");
import { v4 as uuidv4 } from "uuid";

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		_id: {
			type: String,
			hashKey: true,
			required: true,
			default: () => uuidv4(),
		},
		title: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.String,
			ref: "user",
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
