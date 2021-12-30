import { MissingParamError } from "../../../utils/errors";
import { PhotoRepository } from "../../../repositories/Photo/PhotoRepository/PhotoRepository";
import { UserRepository } from "../../../repositories/User/UserRepository/UserRepository";
import Helper from "../../../utils/helper/Helper";
import IAddPhoto from "./IAddPhoto";

export default class AddPhotoRules {

	private repository: PhotoRepository;
	private userRepository: UserRepository;

	constructor(){
		this.repository = new PhotoRepository();
		this.userRepository = new UserRepository();
	}

	async execute( { userId, filename, originalname }: IAddPhoto ) {
        
		if(!filename)
			return new MissingParamError("Houve um problema no downlodad da foto, tente novamente");

		const url = `${Helper.getApiUrlEnvironmentVariable()}/${filename}`;

		const author = this.userRepository.getName(userId);

		await this.repository.store(Helper.createId(), userId, url, originalname, filename, (await author).toString());

		return "Foto adicionada com sucesso";
	}
}