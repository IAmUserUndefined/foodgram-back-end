import { ok } from "../../../adapter/adapterResponses/adapterResponses";
import IRequestRouters from "../../../adapter/interfaces/IRequestRouters";
import GetUserPhotosRules from "./GetUserPhotosRules";

export default new class GetPhotosController {
    
	async handle(request: IRequestRouters){

		const userId = request.userId;

		const getPhotosRules = new GetUserPhotosRules();

		const response = await getPhotosRules.execute( { userId } );

		return ok(response);
	}
};