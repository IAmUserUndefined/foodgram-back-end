import { PhotoRepository } from "../../../repositories/Photo/PhotoRepository/PhotoRepository";
import IGetUserPhotos from "./IGetUserPhotos";

export default class GetUserPhotoRules {

	private repository: PhotoRepository;

	constructor(){
		this.repository = new PhotoRepository();
	}

	async execute( { userId }: IGetUserPhotos ) {
		return await this.repository.getUserPhotos(userId);
	}
}