import { Photo } from "../../../entities/Photo";
import IPhotoTestRepository from "./IPhotoTestRepository";
import prisma from "../../../../prisma/index";

export class PhotoTestRepository implements IPhotoTestRepository {

	async createTestPhoto(): Promise<void> {
		await prisma.user.create({
			data: {
				id: "aa98bc1b-22f4-4fc6-be64-3d830068bdqq",
				email: "joao@teste.com",
				name: "João Pedro",
				password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
				verificationToken: "544f818f5f5cd4cde44c611683fc71",
				verifiedEmail: true
			}
		});

		await prisma.photo.create({
			data: {
				id: "1",
				userId: "aa98bc1b-22f4-4fc6-be64-3d830068bdqq",
				name: "photo",
				key: "156156415641561456-photo",
				url: "https://photo"
			}
		});
	}

	async getPhotos(userId: string): Promise<Photo[]> {
		const photo = await prisma.photo.findMany({
			where: {
				userId: userId
			}
		});

		return photo;
	}

	async deleteTestPhoto(): Promise<void> {
		await prisma.photo.deleteMany({});
		await prisma.user.deleteMany({});
	}
}
