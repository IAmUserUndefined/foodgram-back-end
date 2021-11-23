import IPhotoRepository from "./IPhotoRepository";
import { Photo } from "../../../entities/Photo";
import prisma from "../../../../prisma/index";

class PhotoRepository implements IPhotoRepository {

	async store(id: string, userId: string, url: string, originalname: string, filename: string): Promise<void> {
		await prisma.photo.create({
			data: {
				id: id,
				userId: userId,
				url: url,
				name: originalname,
				key: filename
			}
		});
	}

	async getPhotos(): Promise<Photo[]>{
		return await prisma.photo.findMany({});
	}

	async getUserPhotos(userId: string): Promise<Photo[]>{
		return await prisma.photo.findMany({
			where: {
				userId: userId
			}
		});
	}

	async destroy(id: string) {
		await prisma.photo.delete({
			where: {
				id: id
			}
		});
	}
}

export { PhotoRepository };