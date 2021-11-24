jest.setTimeout(15000);

import { PhotoTestRepository } from "../../../repositories/Photo/PhotoTestRepository/PhotoTestRepository";

const photoTestRepository = new PhotoTestRepository();

import request from "supertest";

import app from "../../../app";

import Helper from "../../../utils/helper/Helper";

import path from "path";

describe("Get Photo", () => {

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

		const photos = await photoTestRepository.getPhotos();
		const key = photos[1].key;

		Helper.deleteFile(key);

		await photoTestRepository.deleteTestPhoto();

	});
	test("Should get the photo", async () => {

		const token = await request(app)
			.post("/user/login")
			.send({
				email: "joao@teste.com",
				password: "Corinthians1910"
			});

		const response = await request(app)
			.get("/photo")
			.set("Authorization", `Bearer ${token.body.response}`);

		expect(response.statusCode).toBe(200);
		expect(response.body.response[0].id).not.toBeUndefined();
		expect(response.body.response[0].name).not.toBeUndefined();
		expect(response.body.response[0].key).not.toBeUndefined();
		expect(response.body.response[0].url).not.toBeUndefined();

	});
});