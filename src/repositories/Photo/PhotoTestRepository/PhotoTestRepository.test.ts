import { PhotoTestRepository } from "./PhotoTestRepository";

describe(("Test of photo test repository"), () => {

	test("Should create test photo", async () => {
		const repository = new PhotoTestRepository();
		await repository.createTestPhoto();
	});

	test("Should remove test photo", async () => {
		const repository = new PhotoTestRepository();
		await repository.deleteTestPhoto();
	});

});