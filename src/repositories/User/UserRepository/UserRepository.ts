import "../../../database/index";
import UserModel from "../../../database/models/User";
import IUserRepository from "./IUserRepository";

export class UserRepository implements IUserRepository{

	async store(id: string, email: string, name: string, hash: string, token: string): Promise<void> {
		try {
			await UserModel.create({
				_id: id,
				email: email,
				name: name,
				password: hash,
				verificationToken: token,
				verificationTokenExpiryTime: 0
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async verifyEmail(email: string, token: string): Promise<void> {
		try {
			await UserModel.updateOne({
				email: email,
				verificationToken: token
			},
		
			{ verifiedEmail: true }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async getName(id: string): Promise<string> {
		try {
			const { name } = await UserModel.findOne(
				{
					_id: id
				});
	
			return name;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateName(id: string, name: string): Promise<void> {
		try {
			await UserModel.updateOne(
				{ _id: id },
				{ name: name }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async destroy(id: string): Promise<void> {
		try {
			await UserModel.deleteOne( { _id: id } );
		}

		catch(e) {
			console.log(e);
		}
	}

	async findEmailById(id: string): Promise<string> {
		try {
			const { email } = await UserModel.findOne(
				{ _id: id }
			);
	
			return email;
		}

		catch(e) {
			console.log(e);
		}
	}

	async findEmailByEmail(email: string): Promise<string> {
		try {
			const userEmail = await UserModel.findOne(
				{ email: email }
			);
	
			return userEmail ? userEmail.email : null;
		}

		catch(e) {
			console.log(e);
		}
	}

	async findByEmailVerified(email: string): Promise<string> {
		try {
			const user = await UserModel.findOne({
				email: email,
				verifiedEmail: true
			});

			const userEmail = user ? user.email : null;
	
			return userEmail;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getId(email: string): Promise<string> {
		try {
			const { _id } = await UserModel.findOne(
				{
					email: email
				});
	
			return _id;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getPasswordByEmail(email: string): Promise<string> {
		try {
			const { password } = await UserModel.findOne({
				email: email
			});
	
			return password;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getPasswordById(id: string): Promise<string> {
		try {
			const { password } = await UserModel.findOne({
				_id: id
			});
	
			return password;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenById(id: string): Promise<string> {
		try {
			const { verificationToken } = await UserModel.findOne(
				{
					_id: id,
				});
	
			return verificationToken;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenByEmail(email: string): Promise<string> {
		try {
			const { verificationToken } = await UserModel.findOne(
				{
					email: email,
				});
	
			return verificationToken;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenById(id: string, verificationToken: string): Promise<void> {
		try {
			await UserModel.updateOne(
				{ _id: id },
				{ verificationToken: verificationToken }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenByEmail(email: string, verificationToken: string): Promise<void> {
		await UserModel.updateOne(
			{ email: email },
			{ verificationToken: verificationToken }
		);
	}

	async getVerificationTokenExpiryDateById(id: string): Promise<number> {
		try {
			const { verificationTokenExpiryTime }  = await UserModel.findOne(
				{
					_id: id,
				});
	
			return verificationTokenExpiryTime;
		}

		catch(e) {
			console.log(e);
		}
	}

	async getVerificationTokenExpiryDateByEmail(email: string): Promise<number> {
		try {
			const { verificationTokenExpiryTime }  = await UserModel.findOne(
				{
					email: email,
				});

			return verificationTokenExpiryTime;
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenExpiryDateById(id: string, verificationTokenExpiryDate: number): Promise<void> {
		try {
			await UserModel.updateOne(
				{ _id: id },
				{ verificationTokenExpiryTime: verificationTokenExpiryDate }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateVerificationTokenExpiryDateByEmail(email: string, verificationTokenExpiryDate: number): Promise<void> {
		try {
			await UserModel.updateOne(
				{ email: email },
				{ verificationTokenExpiryTime: verificationTokenExpiryDate }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async updateEmail(id: string, email: string): Promise<void> {
		try {
			await UserModel.updateOne(
				{ _id: id },
				{ email: email }
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async updatePasswordById(id: string, password: string): Promise<void> {
		try {
			await UserModel.updateOne(
				{ _id: id },
				{ password: password },
			);
		}

		catch(e) {
			console.log(e);
		}
	}

	async updatePasswordByEmail(email: string, password: string): Promise<void> {
		
		try {
			await UserModel.updateOne(
				{ email: email },
				{ password: password },
			);
		}
		
		catch(e) {
			console.log(e);
		}
	}
}