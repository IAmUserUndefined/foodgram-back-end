import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import AddPhotoRules from "./AddPhotoRules";

export default new class AddPhotoController {

	async handle(request: IRequestRouters){
		
		const userId = request.userId;

		const { filename, originalname } = request.file;

		const addPhotoRules = new AddPhotoRules();

		const response = await addPhotoRules.execute( { userId, filename, originalname } );

		return ok(response);
        
	}
};