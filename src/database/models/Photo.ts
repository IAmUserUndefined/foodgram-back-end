import { Schema, model } from "mongoose";

const PhotoSchema = new Schema({
    
	_id: {
		type: String,
		require: true
	},

	userId: {
		type: String,
		require: true
	},

	url: {
		type: String,
		require: true
	},

	name: {
		type: String,
		require: true
	},

	key: {
		type: String,
		require: true
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

export default model("photos", PhotoSchema);