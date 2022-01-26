import IPhotoRepository from "./IPhotoRepository";
import { Photo } from "../../../entities/Photo";
import prisma from "../../../../prisma/index";

class PhotoRepository implements IPhotoRepository {

	async store(id: string, userId: string, url: string, originalname: string, filename: string): Promise<void> {
		try {
			await prisma.photo.create({
				data: {
					id: id,
					userId: userId,
					url: url,
					name: originalname,
					key: filename,
				}
			});
		}
		
		catch(e) {
			console.log(e);
		}
	}

	async getPhotos(): Promise<Photo[]>{
		try {
			return await prisma.photo.findMany({
				orderBy: {
					createdAt: "desc"
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async getUserPhotos(userId: string): Promise<Photo[]>{
		try {
			return await prisma.photo.findMany({
				where: {
					userId: userId
				},
				orderBy: {
					createdAt: "desc"
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}

	async destroy(id: string) {
		try {
			await prisma.photo.delete({
				where: {
					id: id
				}
			});
		}

		catch(e) {
			console.log(e);
		}
	}
}

export { PhotoRepository };