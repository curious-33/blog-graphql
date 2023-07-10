const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const { Schema } = mongoose;

const userSchema = new Schema(
	{
		_id: {
			type: String,
			hashKey: true,
			required: true,
			default: () => uuidv4(),
		},
		username: {
			type: String,
			unique: true,
			required: [true, "Username is required. It should be unique"],
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Email is required. It should be unique"],
		},
	},
	{ timestamps: true, versionKey: false }
);

userSchema.post("save", function (doc, next) {
	// console.log("doc after saved", doc);
	next();
});

// userSchema.pre("save", function () {
// 	this.status = 0;
// });

module.exports = mongoose.model("user", userSchema);
