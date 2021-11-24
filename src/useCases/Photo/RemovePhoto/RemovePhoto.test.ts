jest.setTimeout(15000);

import { PhotoTestRepository } from "../../../repositories/Photo/PhotoTestRepository/PhotoTestRepository";

const photoTestRepository = new PhotoTestRepository();

import request from "supertest";

import app from "../../../app";

import path from "path";

describe("Remove Photo", () => {

	beforeAll(async () => {

		await photoTestRepository.createTestPhoto();

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		await request(app)
			.post("/photo")
			.set("Authorization", `Bearer ${token.body.response}`)
			.attach("file", path.resolve(__dirname, "..", "..", "..", "utils", "tmp", "test", "corinthians.jpg"));
	});

	afterAll(async () => {

		await photoTestRepository.deleteTestPhoto();

	});

	test("Should remove the photo", async () => {

		const photo = await photoTestRepository.getPhotos();

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.delete(`/photo/${photo[0].id}/${photo[0].key}`)
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Foto excluída com sucesso");

	});
});