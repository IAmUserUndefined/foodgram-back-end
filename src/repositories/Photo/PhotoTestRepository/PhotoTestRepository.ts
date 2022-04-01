import "../../../database/index";
import { Photo } from "../../../entities/Photo";
import UserModel from "../../../database/models/User";
import PhotoModel from "../../../database/models/Photo";
import IPhotoTestRepository from "./IPhotoTestRepository";

export class PhotoTestRepository implements IPhotoTestRepository {

	async createTestPhoto(): Promise<void> {
		try {
			await UserModel.create({
				_id: "aa98bc1b-22f4-4fc6-be64-3d830068bdqqaaaaaaaa",
				email: "joao@teste.com",
				name: "João Pedro",
				password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
				verificationToken: "544f818f5f5cd4cde44c611683fc71",
				verifiedEmail: true
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async getPhotos(): Promise<Photo[]> {
		try {
			const photo: Photo[] = await PhotoModel.find({});
			const objects: Photo[] = [];

			photo.map((object: Photo) => {
				const photo = { 
					_id: object._id,
					id: object._id,
					userId: object.userId,
					url: object.url,
					name: object.name,
					key: object.key,
				};

				objects.push(photo);
			});

			return objects;
		}

		catch(e) {
			console.log(e);
		}
	}

	async deleteTestPhoto(): Promise<void> {
		try {
			await PhotoModel.deleteMany({});
			await UserModel.deleteMany({});
		}

		catch(e) {
			console.log(e);
		}
	}
}
