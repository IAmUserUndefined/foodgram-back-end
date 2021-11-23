jest.setTimeout(15000);

import { PhotoTestRepository } from "../../../repositories/Photo/PhotoTestRepository/PhotoTestRepository";

const photoTestRepository = new PhotoTestRepository();

import request from "supertest";

import app from "../../../app";

import Helper from "../../../utils/helper/Helper";

import path from "path";

describe("Add Photo", () => {

	beforeAll(async () => {

		await photoTestRepository.createTestPhoto();

	});

	afterAll(async () => {

		const photos = await photoTestRepository.getPhotos();

		const key = photos[1].key;

		Helper.deleteFile(key);

		await photoTestRepository.deleteTestPhoto();

	});

	test("Should add the photo", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.post("/photo")
			.set("Authorization", `Bearer ${token.body.response}`)
			.attach("file", path.resolve(__dirname, "..", "..", "..", "utils", "tmp", "test", "corinthians.jpg"));

		expect(response.statusCode).toBe(200);
		expect(response.body.response).toBe("Foto adicionada com sucesso");

	});
});