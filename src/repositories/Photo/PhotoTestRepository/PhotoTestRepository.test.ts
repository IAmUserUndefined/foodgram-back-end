import { PhotoTestRepository } from "./PhotoTestRepository";

describe(("Test of photo test repository"), () => {

	test("Should create test photo", async () => {
		const repository = new PhotoTestRepository();
		await repository.createTestPhoto();
	});

	test("Should get photos", async () => {
		const repository = new PhotoTestRepository();
		const photo = await repository.getPhotos();
		expect(photo[0].id).not.toBeUndefined();
		expect(photo[0].userId).not.toBeUndefined();
		expect(photo[0].name).not.toBeUndefined();
		expect(photo[0].key).not.toBeUndefined();
	});

	test("Should remove test photo", async () => {
		const repository = new PhotoTestRepository();
		await repository.deleteTestPhoto();
	});

});