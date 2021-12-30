import { MissingParamError } from "../../../utils/errors";
import { PhotoRepository } from "../../../repositories/Photo/PhotoRepository/PhotoRepository";
import Helper from "../../../utils/helper/Helper";
import IAddPhoto from "./IAddPhoto";

export default class AddPhotoRules {

	private repository: PhotoRepository;

	constructor(){
		this.repository = new PhotoRepository();
	}

	async execute( { userId, filename, originalname, location, key }: IAddPhoto ) {
        
		if(!filename && !location)
			return new MissingParamError("Houve um problema no downlodad da foto, tente novamente");

		const url = location || `${Helper.getApiUrlEnvironmentVariable()}/${filename}`;
	
		const photoKey = filename || key;

		await this.repository.store(Helper.createId(), userId, url, originalname, photoKey);

		return "Foto adicionada com sucesso";
	}
}