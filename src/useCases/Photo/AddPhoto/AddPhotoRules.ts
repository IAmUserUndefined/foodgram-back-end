import { MissingParamError } from "../../../utils/errors";
import { PhotoRepository } from "../../../repositories/Photo/PhotoRepository/PhotoRepository";
import Helper from "../../../utils/helper/Helper";
import IAddPhoto from "./IAddPhoto";

export default class AddPhotoRules {

	private repository: PhotoRepository;

	constructor(){
		this.repository = new PhotoRepository();
	}

	async execute( { userId, filename, originalname }: IAddPhoto ) {
        
		if(!filename)
			return new MissingParamError("Houve um problema no downlodad da foto, tente novamente");

		const url = `${Helper.getApiUrlEnvironmentVariable()}/${filename}`;

		await this.repository.store(Helper.createId(), userId, url, originalname, filename);

		return "Foto adicionada com sucesso";
	}
}