import { UserRepository } from "../../User/UserRepository/UserRepository";
import { PhotoRepository } from "./PhotoRepository";

describe(("Test of photo repository"), () => {

	beforeAll(async () => {
		const repository = new UserRepository();
		await repository.store("1", "email@teste.com", "João Pedro", "Teste123", "abc-123-456");
	});

	afterAll(async () => {
		const repository = new UserRepository();
		await repository.destroy("1");
	});

	test("Should create photo", async () => {
		const repository = new PhotoRepository();
		await repository.store("1", "1", "https://photo/1", "photo", "1515611189989-photo", "João Pedro");
	});

	test("Should get photos", async () => {
		const repository = new PhotoRepository();
		const photo = await repository.getPhotos();
		expect(photo[0].id).toBe("1");
		expect(photo[0].userId).toBe("1");
		expect(photo[0].url).toBe("https://photo/1");
		expect(photo[0].name).toBe("photo");
		expect(photo[0].key).toBe("1515611189989-photo");
		expect(photo[0].author).toBe("João Pedro");
	});

	test("Should get user photos", async () => {
		const repository = new PhotoRepository();
		const photo = await repository.getUserPhotos("1");
		expect(photo[0].id).toBe("1");
		expect(photo[0].userId).toBe("1");
		expect(photo[0].url).toBe("https://photo/1");
		expect(photo[0].name).toBe("photo");
		expect(photo[0].key).toBe("1515611189989-photo");
	});

	test("Should delete photo", async () => {
		const repository = new PhotoRepository();
		await repository.destroy("1");
	});
});