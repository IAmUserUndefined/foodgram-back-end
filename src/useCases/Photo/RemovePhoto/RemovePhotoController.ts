import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import RemovePhotoRules from "./RemovePhotoRules";

export default new class RemovePhotoController {

	async handle(request: IRequestRouters){
		const { photoId, key } = request.params;
        
		const removePhotoRules = new RemovePhotoRules();

		const response = await removePhotoRules.execute( { photoId, key } );

		return ok(response);
	}
};