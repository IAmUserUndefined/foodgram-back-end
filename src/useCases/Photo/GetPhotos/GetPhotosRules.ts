import { PhotoRepository } from "../../../repositories/Photo/PhotoRepository/PhotoRepository";

export default class GetPhotoRules {

	private repository: PhotoRepository;

	constructor(){
		this.repository = new PhotoRepository();
	}

	async execute() {
		return await this.repository.getPhotos();
	}
}