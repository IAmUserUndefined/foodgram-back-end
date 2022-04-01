import Helper from "../utils/helper/Helper";
import mongoose from "mongoose";

const database = async () => {
	await mongoose.connect(Helper.getDatabaseUrlEnvironmentVariable());
};

database().catch(err => console.log(err));

export default () => mongoose.connection.close();