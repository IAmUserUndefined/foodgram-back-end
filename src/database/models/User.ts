import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    
	_id: {
		type: String,
		require: true
	},

	email: {
		type: String,
		require: true
	},

	password: {
		type: String,
		require: true
	},

	name: {
		type: String,
		require: true
	},

	verificationToken: {
		type: String,
		require: true
	},

	verificationTokenExpiryTime: {
		type: Number,
		require: false
	},

	verifiedEmail: {
		type: Boolean,
		require: false
	},

	createdAt: { 
		type: Date, 
		default: Date.now 
	},

	updatedAt: { 
		type: Date, 
		default: Date.now 
	}
});

export default model("users", UserSchema);