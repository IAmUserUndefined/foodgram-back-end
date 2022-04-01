import "../../../database/index";
import { Photo } from "../../../entities/Photo";
import PhotoModel from "../../../database/models/Photo";
import IPhotoRepository from "./IPhotoRepository";

class PhotoRepository implements IPhotoRepository {

	async store(id: string, userId: string, url: string, originalname: string, filename: string): Promise<void> {
		try {
			await PhotoModel.create({
				_id: id,
				userId: userId,
				url: url,
				name: originalname,
				key: filename,
			});
		}
		
		catch(e) {
			console.log(e);
		}
	}

	async getPhotos(): Promise<Photo[]>{
		try {
			const photo = await PhotoModel.find({});
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

	async getUserPhotos(userId: string): Promise<Photo[]>{
		try {
			const photo: Photo[] = await PhotoModel.find({ userId: userId });
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

	async destroy(id: string) {
		try {
			await PhotoModel.deleteOne({
				_id: id
			});
		}

		catch(e) {
			console.log(e);
		}
	}
}

export { PhotoRepository };